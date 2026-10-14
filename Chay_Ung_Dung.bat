@echo off
title Khoi Chay Phan Mem Trac Nghiem 40 Cau (Revision 1)
cd /d "%~dp0"
echo =================================================================
echo   DANG KHOI CHAY PHAN MEM TRAC NGHIEM 40 CAU NGAU NHIEN - TDC
echo   Chu de: Present, Past, Future Tenses va Verb Patterns
echo =================================================================
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
