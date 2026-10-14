# PowerShell Static Web Server cho Ung Dung Trac Nghiem 40 Cau (REVISION 1)
$defaultPort = 8085
$folder = $PSScriptRoot
if (-not $folder) { $folder = Get-Location }

# Ham kiem tra cong kha dung
function Get-AvailablePort([int]$startPort) {
    $port = $startPort
    while ($port -lt ($startPort + 50)) {
        $listenerTest = $null
        try {
            $listenerTest = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $port)
            $listenerTest.Start()
            $listenerTest.Stop()
            return $port
        } catch {
            $port++
        }
    }
    return $startPort
}

$port = Get-AvailablePort $defaultPort

# Lay dia chi IP mang noi bo (Wi-Fi hoac LAN) de mo tren dien thoai / iPad
$localIp = (Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue | Where-Object { $_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254*" } | Select-Object -ExpandProperty IPAddress -First 1)

$listener = New-Object System.Net.HttpListener

try {
    $listener.Prefixes.Add("http://+:$port/")
    $listener.Start()
} catch {
    # Neu khong co quyen admin binding http://+:port/, bind vao localhost:port
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
}

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host " PHAN MEM TRAC NGHIEM 40 CAU TONG HOP - REVISION 1 (TDC)        " -ForegroundColor Yellow
Write-Host " Chu de: Present, Past, Future Tenses & Verb Patterns           " -ForegroundColor White
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host " May chu dang chay tai:" -ForegroundColor Green
Write-Host " -> Tren may tinh (Localhost):  http://localhost:$port" -ForegroundColor White
Write-Host " -> Tren 127.0.0.1:             http://127.0.0.1:$port" -ForegroundColor White
if ($localIp) {
    Write-Host " -> Tren Dien thoai / iPad:     http://$($localIp):$port" -ForegroundColor Yellow
}
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host " Nhan Ctrl + C de dung may chu." -ForegroundColor Gray
Write-Host ""

# Tu dong mo trinh duyet
Start-Process "http://localhost:$port"

# Vong lap phuc vu cac yeu cau HTTP
while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($urlPath) -or $urlPath -eq "/") {
            $urlPath = "index.html"
        }

        $filePath = Join-Path $folder $urlPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            switch ($ext) {
                ".html" { $mime = "text/html; charset=utf-8" }
                ".css"  { $mime = "text/css; charset=utf-8" }
                ".js"   { $mime = "application/javascript; charset=utf-8" }
                ".png"  { $mime = "image/png" }
                ".jpg"  { $mime = "image/jpeg" }
                ".ico"  { $mime = "image/x-icon" }
                ".svg"  { $mime = "image/svg+xml" }
                default { $mime = "application/octet-stream" }
            }

            $response.ContentType = $mime
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.Close()
    } catch {
        # Bo qua ngoai le ngat ket noi
    }
}
