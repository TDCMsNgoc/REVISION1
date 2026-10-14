/**
 * PHẦN MỀM TRẮC NGHIỆM 40 CÂU TỔNG HỢP (REVISION 1)
 * 4 Chủ đề: Present Tenses, Past Tenses, Future Tenses & Verb Patterns
 * - Chọn ngẫu nhiên 40 câu (10 câu mỗi chủ đề)
 * - Xáo trộn ngẫu nhiên mỗi lần sinh viên làm lại
 * - Khung câu hỏi đặt bên dưới cùng khi hiển thị trên điện thoại / ipad
 * - Đảm bảo câu hỏi và các lựa chọn cùng nằm trên 1 khung duy nhất
 */

(function () {
  "use strict";

  // Số lượng câu hỏi của bài thi
  const TOTAL_QUESTIONS = 40;
  const INITIAL_SECONDS = 45 * 60; // 45 phút đếm ngược

  // Biến trạng thái toàn cục
  let quizQuestions = [];      // Danh sách 40 câu hỏi hiện tại
  let currentIndex = 0;        // 0..39
  let userAnswers = {};        // { 1: 'A', 2: 'C', ... }
  let flaggedSet = new Set();  // Set các quizNumber được gắn cờ
  let isSubmitted = false;
  let remainingSeconds = INITIAL_SECONDS;
  let timerInterval = null;

  // DOM Elements
  const topTimerEl = document.getElementById("topTimer");
  const timerTextEl = document.getElementById("timerText");
  const bottomTimerEl = document.getElementById("bottomTimer");
  const topQuestionIndicatorEl = document.getElementById("topQuestionIndicator");
  const progressBarEl = document.getElementById("progressBar");

  const btnFlagHeader = document.getElementById("btnFlag");
  const flagBtnTextHeader = document.getElementById("flagBtnText");
  const btnNewQuizHeader = document.getElementById("btnNewQuizHeader");
  const btnNewQuizFooter = document.getElementById("btnNewQuizFooter");

  // Sidebar / Palette
  const paletteSidebarEl = document.getElementById("paletteSidebar");
  const paletteStatsEl = document.getElementById("paletteStats");
  const questionGridEl = document.getElementById("questionGrid");
  const btnSubmitSidebar = document.getElementById("btnSubmitSidebar");

  // Single Unified Question Card
  const quizUnifiedCardEl = document.getElementById("quizUnifiedCard");
  const cardQuestionNumEl = document.getElementById("cardQuestionNum");
  const btnCardFlag = document.getElementById("btnCardFlag");
  const cardFlagText = document.getElementById("cardFlagText");
  const questionTextEl = document.getElementById("questionText");
  const optionsContainerEl = document.getElementById("optionsContainer");

  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const btnSubmitInline = document.getElementById("btnSubmitInline");

  // Footer Elements
  const btnSubmitBottom = document.getElementById("btnSubmitBottom");
  const btnPrevBottom = document.getElementById("btnPrevBottom");
  const btnNextBottom = document.getElementById("btnNextBottom");
  const statusCounterEl = document.getElementById("statusCounter");

  // Modals
  const submitModalEl = document.getElementById("submitModal");
  const btnModalCancel = document.getElementById("btnModalCancel");
  const btnModalConfirm = document.getElementById("btnModalConfirm");
  const modalAnsweredCount = document.getElementById("modalAnsweredCount");
  const modalUnansweredCount = document.getElementById("modalUnansweredCount");
  const modalFlaggedCount = document.getElementById("modalFlaggedCount");
  const modalWarningTip = document.getElementById("modalWarningTip");

  // Result Screen Elements
  const quizMainSection = document.getElementById("quizMainSection");
  const quizFooter = document.getElementById("quizFooter");
  const resultScreen = document.getElementById("resultScreen");

  const scoreDisplay = document.getElementById("scoreDisplay");
  const scoreSub = document.getElementById("scoreSub");
  const statCorrect = document.getElementById("statCorrect");
  const statIncorrect = document.getElementById("statIncorrect");
  const statUnanswered = document.getElementById("statUnanswered");
  const statTimeSpent = document.getElementById("statTimeSpent");

  const topicScorePresent = document.getElementById("topicScorePresent");
  const topicScorePast = document.getElementById("topicScorePast");
  const topicScoreFuture = document.getElementById("topicScoreFuture");
  const topicScoreVerb = document.getElementById("topicScoreVerb");

  const btnRestartNew = document.getElementById("btnRestartNew");
  const btnRestartSame = document.getElementById("btnRestartSame");
  const btnToggleReview = document.getElementById("btnToggleReview");
  const reviewDetailsSection = document.getElementById("reviewDetailsSection");
  const reviewItemsList = document.getElementById("reviewItemsList");

  // Lưu và khôi phục LocalStorage
  const STORAGE_KEY = "TDC_REVISION1_QUIZ_STATE";

  function saveQuizState() {
    if (isSubmitted) return;
    try {
      const state = {
        quizQuestions: quizQuestions,
        currentIndex: currentIndex,
        userAnswers: userAnswers,
        flaggedList: Array.from(flaggedSet),
        remainingSeconds: remainingSeconds
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save to LocalStorage", e);
    }
  }

  function loadQuizState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.quizQuestions && state.quizQuestions.length === TOTAL_QUESTIONS) {
          quizQuestions = state.quizQuestions;
          currentIndex = state.currentIndex || 0;
          userAnswers = state.userAnswers || {};
          flaggedSet = new Set(state.flaggedList || []);
          remainingSeconds = typeof state.remainingSeconds === "number" ? state.remainingSeconds : INITIAL_SECONDS;
          return true;
        }
      }
    } catch (e) {
      console.warn("Could not load from LocalStorage", e);
    }
    return false;
  }

  function clearQuizState() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  // Format thời gian MM : SS
  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    const mm = String(m).padStart(2, "0");
    const ss = String(s).padStart(2, "0");
    return `${mm} : ${ss}`;
  }

  function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds--;
        updateTimerDisplay();
        if (remainingSeconds % 5 === 0) {
          saveQuizState();
        }
      } else {
        clearInterval(timerInterval);
        alert("Đã hết thời gian làm bài (45 phút)! Hệ thống sẽ tự động nộp bài của bạn.");
        confirmSubmitQuiz();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const formatted = formatTime(remainingSeconds);
    if (timerTextEl) timerTextEl.textContent = formatted;
    if (bottomTimerEl) bottomTimerEl.textContent = formatted;

    // Cảnh báo đỏ nhấp nháy khi còn dưới 5 phút (300 giây)
    if (topTimerEl) {
      if (remainingSeconds <= 300) {
        topTimerEl.classList.add("warning");
      } else {
        topTimerEl.classList.remove("warning");
      }
    }
  }

  /**
   * Khởi tạo đề thi mới 40 câu ngẫu nhiên:
   * - Lấy 10 câu Present, 10 câu Past, 10 câu Future, 10 câu Verb Patterns
   * - Xáo trộn ngẫu nhiên hoàn toàn (Fisher-Yates)
   */
  function initNewRandomQuiz() {
    clearQuizState();
    quizQuestions = generateRandom40Quiz();
    currentIndex = 0;
    userAnswers = {};
    flaggedSet = new Set();
    isSubmitted = false;
    remainingSeconds = INITIAL_SECONDS;

    // Hiển thị lại màn hình thi nếu đang ở màn hình kết quả
    if (resultScreen) resultScreen.style.display = "none";
    if (quizMainSection) quizMainSection.style.display = "flex";
    if (quizFooter) quizFooter.style.display = "flex";

    saveQuizState();
    startTimer();
    renderCurrentQuestion();
    renderPalette();
    updateGlobalCounters();
  }

  /**
   * Làm lại chính xác 40 câu hỏi của đề hiện tại
   */
  function restartCurrentQuiz() {
    clearQuizState();
    currentIndex = 0;
    userAnswers = {};
    flaggedSet = new Set();
    isSubmitted = false;
    remainingSeconds = INITIAL_SECONDS;

    if (resultScreen) resultScreen.style.display = "none";
    if (quizMainSection) quizMainSection.style.display = "flex";
    if (quizFooter) quizFooter.style.display = "flex";

    saveQuizState();
    startTimer();
    renderCurrentQuestion();
    renderPalette();
    updateGlobalCounters();
  }

  /**
   * Hiển thị câu hỏi hiện tại trong 1 KHUNG DUY NHẤT
   */
  function renderCurrentQuestion() {
    if (!quizQuestions || quizQuestions.length === 0) return;
    const q = quizQuestions[currentIndex];
    const qNum = q.quizNumber || (currentIndex + 1);

    // Cập nhật số thứ tự câu
    const numText = `Câu ${qNum} / ${TOTAL_QUESTIONS}`;
    if (cardQuestionNumEl) cardQuestionNumEl.textContent = numText;
    if (topQuestionIndicatorEl) topQuestionIndicatorEl.textContent = numText;

    // Cập nhật nút gắn cờ
    const isFlagged = flaggedSet.has(qNum);
    updateFlagButtons(isFlagged);

    // Cập nhật nội dung câu hỏi
    if (questionTextEl) {
      questionTextEl.innerHTML = `<strong>Câu ${qNum}:</strong> ${escapeHtml(q.question)}`;
    }

    // Render 4 phương án trả lời trong cùng 1 khung
    if (optionsContainerEl) {
      optionsContainerEl.innerHTML = "";
      const selectedOptionKey = userAnswers[qNum] || null;

      q.options.forEach((opt) => {
        const row = document.createElement("div");
        row.className = "option-row";
        if (selectedOptionKey === opt.key) {
          row.classList.add("selected");
        }

        row.innerHTML = `
          <div class="radio-circle">
            <div class="radio-dot"></div>
          </div>
          <span class="option-key">${opt.key}.</span>
          <span class="option-text">${escapeHtml(opt.text)}</span>
        `;

        row.addEventListener("click", () => {
          selectAnswer(qNum, opt.key);
        });

        optionsContainerEl.appendChild(row);
      });
    }

    // Cập nhật nút Prev / Next
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === TOTAL_QUESTIONS - 1;

    if (btnPrev) btnPrev.disabled = isFirst;
    if (btnPrevBottom) btnPrevBottom.disabled = isFirst;

    if (btnNext) {
      btnNext.innerHTML = isLast ? "Đến câu 1 &rarr;" : "Câu tiếp theo &rarr;";
    }
    if (btnNextBottom) {
      btnNextBottom.innerHTML = isLast ? "Đến câu 1 &rarr;" : "Câu sau &rarr;";
    }

    // Cuộn nhẹ lên đầu khung câu hỏi trên thiết bị di động
    if (window.innerWidth <= 1024 && quizUnifiedCardEl) {
      quizUnifiedCardEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  /**
   * Chọn đáp án cho câu hỏi
   */
  function selectAnswer(qNum, key) {
    if (isSubmitted) return;
    userAnswers[qNum] = key;
    saveQuizState();

    // Cập nhật lại giao diện các phương án trong khung
    if (optionsContainerEl) {
      const rows = optionsContainerEl.querySelectorAll(".option-row");
      const currentQ = quizQuestions[currentIndex];
      currentQ.options.forEach((opt, idx) => {
        if (rows[idx]) {
          if (opt.key === key) {
            rows[idx].classList.add("selected");
          } else {
            rows[idx].classList.remove("selected");
          }
        }
      });
    }

    renderPalette();
    updateGlobalCounters();
  }

  /**
   * Đặt hoặc gỡ cờ câu hỏi
   */
  function toggleFlagCurrentQuestion() {
    const qNum = quizQuestions[currentIndex].quizNumber || (currentIndex + 1);
    if (flaggedSet.has(qNum)) {
      flaggedSet.delete(qNum);
    } else {
      flaggedSet.add(qNum);
    }
    saveQuizState();
    updateFlagButtons(flaggedSet.has(qNum));
    renderPalette();
  }

  function updateFlagButtons(isFlagged) {
    if (btnFlagHeader) {
      if (isFlagged) {
        btnFlagHeader.classList.add("active");
        if (flagBtnTextHeader) flagBtnTextHeader.textContent = "Bỏ cờ";
      } else {
        btnFlagHeader.classList.remove("active");
        if (flagBtnTextHeader) flagBtnTextHeader.textContent = "Đặt cờ";
      }
    }

    if (btnCardFlag) {
      if (isFlagged) {
        btnCardFlag.classList.add("active");
        if (cardFlagText) cardFlagText.textContent = "Đã cắm cờ";
      } else {
        btnCardFlag.classList.remove("active");
        if (cardFlagText) cardFlagText.textContent = "Đánh dấu";
      }
    }
  }

  /**
   * Render lưới 40 nút chọn câu hỏi (Palette)
   * Đặt ở sidebar (Desktop) hoặc ở DƯỚI CÙNG (Điện thoại / iPad)
   */
  function renderPalette() {
    if (!questionGridEl) return;
    questionGridEl.innerHTML = "";

    quizQuestions.forEach((q, idx) => {
      const qNum = q.quizNumber || (idx + 1);
      const btn = document.createElement("button");
      btn.className = "q-grid-btn";
      btn.type = "button";
      btn.textContent = qNum;

      const isCurrent = idx === currentIndex;
      const hasAnswer = userAnswers[qNum] !== undefined && userAnswers[qNum] !== null;
      const isFlagged = flaggedSet.has(qNum);

      if (hasAnswer) {
        btn.classList.add("answered");
      } else {
        btn.classList.add("unanswered");
      }

      if (isCurrent) {
        btn.classList.add("current");
      }

      if (isFlagged) {
        btn.classList.add("flagged");
      }

      btn.addEventListener("click", () => {
        goToQuestion(idx);
      });

      questionGridEl.appendChild(btn);
    });
  }

  /**
   * Chuyển đến câu hỏi theo index
   */
  function goToQuestion(newIndex) {
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= TOTAL_QUESTIONS) newIndex = 0; // Vòng lại câu 1 nếu vượt quá
    currentIndex = newIndex;
    saveQuizState();
    renderCurrentQuestion();
    renderPalette();
  }

  /**
   * Cập nhật các bộ đếm số câu đã làm và thanh tiến độ
   */
  function updateGlobalCounters() {
    const answeredCount = Object.keys(userAnswers).length;
    const progressPercent = (answeredCount / TOTAL_QUESTIONS) * 100;

    if (progressBarEl) {
      progressBarEl.style.width = `${Math.max(2.5, progressPercent)}%`;
    }

    const statText = `Đã làm: ${answeredCount}/${TOTAL_QUESTIONS}`;
    if (paletteStatsEl) paletteStatsEl.textContent = statText;
    if (statusCounterEl) statusCounterEl.textContent = statText;
  }

  /**
   * Mở modal xác nhận nộp bài
   */
  function openSubmitModal() {
    const answeredCount = Object.keys(userAnswers).length;
    const unansweredCount = TOTAL_QUESTIONS - answeredCount;
    const flaggedCount = flaggedSet.size;

    if (modalAnsweredCount) modalAnsweredCount.textContent = answeredCount;
    if (modalUnansweredCount) modalUnansweredCount.textContent = unansweredCount;
    if (modalFlaggedCount) modalFlaggedCount.textContent = flaggedCount;

    if (modalWarningTip) {
      if (unansweredCount > 0) {
        modalWarningTip.style.display = "block";
        modalWarningTip.textContent = `⚠️ Bạn vẫn còn ${unansweredCount} câu chưa làm. Bạn có chắc chắn muốn nộp bài?`;
      } else {
        modalWarningTip.style.display = "none";
      }
    }

    if (submitModalEl) submitModalEl.classList.add("active");
  }

  function closeSubmitModal() {
    if (submitModalEl) submitModalEl.classList.remove("active");
  }

  /**
   * Xác nhận nộp bài và tính điểm
   */
  function confirmSubmitQuiz() {
    closeSubmitModal();
    clearInterval(timerInterval);
    isSubmitted = true;
    clearQuizState();

    // Tính điểm tổng và điểm từng chủ đề
    let correctTotal = 0;
    let topicScores = {
      present: { correct: 0, total: 0 },
      past: { correct: 0, total: 0 },
      future: { correct: 0, total: 0 },
      verb_pattern: { correct: 0, total: 0 }
    };

    quizQuestions.forEach((q) => {
      const qNum = q.quizNumber;
      const userChoice = userAnswers[qNum];
      const isRight = userChoice === q.correct;

      if (topicScores[q.topicId]) {
        topicScores[q.topicId].total++;
        if (isRight) topicScores[q.topicId].correct++;
      }

      if (isRight) correctTotal++;
    });

    const incorrectTotal = TOTAL_QUESTIONS - correctTotal;
    const unansweredTotal = TOTAL_QUESTIONS - Object.keys(userAnswers).length;
    const timeSpentSeconds = INITIAL_SECONDS - remainingSeconds;

    const score10 = ((correctTotal / TOTAL_QUESTIONS) * 10).toFixed(1);

    // Cập nhật DOM kết quả
    if (scoreDisplay) scoreDisplay.textContent = `${correctTotal} / ${TOTAL_QUESTIONS}`;
    if (scoreSub) scoreSub.textContent = `Thang điểm 10: ${score10} Điểm`;

    if (statCorrect) statCorrect.textContent = correctTotal;
    if (statIncorrect) statIncorrect.textContent = incorrectTotal;
    if (statUnanswered) statUnanswered.textContent = unansweredTotal;
    if (statTimeSpent) {
      const m = Math.floor(timeSpentSeconds / 60);
      const s = timeSpentSeconds % 60;
      statTimeSpent.textContent = `${m}m ${String(s).padStart(2, "0")}s`;
    }

    // Cập nhật điểm từng chủ đề (10 câu mỗi chủ đề)
    if (topicScorePresent) topicScorePresent.textContent = `${topicScores.present.correct} / ${topicScores.present.total}`;
    if (topicScorePast) topicScorePast.textContent = `${topicScores.past.correct} / ${topicScores.past.total}`;
    if (topicScoreFuture) topicScoreFuture.textContent = `${topicScores.future.correct} / ${topicScores.future.total}`;
    if (topicScoreVerb) topicScoreVerb.textContent = `${topicScores.verb_pattern.correct} / ${topicScores.verb_pattern.total}`;

    // Render danh sách giải thích chi tiết 40 câu
    renderDetailedReview();

    // Chuyển màn hình
    if (quizMainSection) quizMainSection.style.display = "none";
    if (quizFooter) quizFooter.style.display = "none";
    if (resultScreen) {
      resultScreen.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /**
   * Render chi tiết giải thích cho cả 40 câu
   */
  function renderDetailedReview() {
    if (!reviewItemsList) return;
    reviewItemsList.innerHTML = "";

    quizQuestions.forEach((q, idx) => {
      const qNum = q.quizNumber || (idx + 1);
      const userChoice = userAnswers[qNum] || null;
      const isRight = userChoice === q.correct;

      const card = document.createElement("div");
      card.className = `review-card-item ${isRight ? "is-correct" : "is-incorrect"}`;

      // Tên chủ đề
      let topicLabel = q.topicNameVi || q.topicName;

      // Danh sách lựa chọn
      let optionsHtml = "";
      q.options.forEach((opt) => {
        let optClass = "review-opt";
        let statusBadge = "";

        if (opt.key === q.correct) {
          optClass += " correct-choice";
          statusBadge = " ✅ (Đáp án đúng)";
        } else if (opt.key === userChoice && !isRight) {
          optClass += " user-picked-wrong";
          statusBadge = " ❌ (Bạn đã chọn)";
        }

        optionsHtml += `
          <div class="${optClass}">
            <b>${opt.key}.</b> ${escapeHtml(opt.text)} ${statusBadge}
          </div>
        `;
      });

      // Lời giải thích ngữ pháp
      let explanationHtml = "";
      if (q.rule) {
        explanationHtml += `<div><strong>📌 Quy tắc:</strong> ${escapeHtml(q.rule)}</div>`;
      }
      if (q.signal) {
        explanationHtml += `<div><strong>🎯 Dấu hiệu:</strong> ${escapeHtml(q.signal)}</div>`;
      }
      if (q.explanation) {
        explanationHtml += `<div style="margin-top: 6px;"><strong>💡 Giải thích chi tiết:</strong> ${escapeHtml(q.explanation)}</div>`;
      }
      if (q.translation) {
        explanationHtml += `<div style="margin-top: 6px; color: #0284c7;"><strong>💬 Dịch nghĩa:</strong> ${escapeHtml(q.translation)}</div>`;
      }

      card.innerHTML = `
        <div class="review-item-header">
          <span class="review-item-title">Câu ${qNum} / ${TOTAL_QUESTIONS} - [${topicLabel}]</span>
          <span class="review-status-tag ${isRight ? "correct" : "incorrect"}">
            ${isRight ? "ĐÚNG (+0.25đ)" : (userChoice ? "SAI (0đ)" : "CHƯA LÀM (0đ)")}
          </span>
        </div>
        <div class="review-item-question">
          ${escapeHtml(q.question)}
        </div>
        <div class="review-options-grid">
          ${optionsHtml}
        </div>
        <div class="review-explanation-box">
          ${explanationHtml}
        </div>
      `;

      reviewItemsList.appendChild(card);
    });
  }

  // Toggle bảng giải thích chi tiết
  function toggleReviewDetails() {
    if (!reviewDetailsSection) return;
    const isHidden = reviewDetailsSection.style.display === "none";
    if (isHidden) {
      reviewDetailsSection.style.display = "block";
      if (btnToggleReview) btnToggleReview.textContent = "▲ Thu gọn giải thích chi tiết";
      reviewDetailsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      reviewDetailsSection.style.display = "none";
      if (btnToggleReview) btnToggleReview.textContent = "📖 Xem giải thích chi tiết 40 câu";
    }
  }

  // Tiện ích chống XSS
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Gán sự kiện phím tắt (Keyboard Navigation)
  function initKeyboardEvents() {
    window.addEventListener("keydown", (e) => {
      if (isSubmitted) return;

      // Phím 1, 2, 3, 4 hoặc A, B, C, D để chọn đáp án
      const keyUpper = e.key.toUpperCase();
      const currentQ = quizQuestions[currentIndex];
      if (!currentQ) return;

      if (keyUpper === "A" || keyUpper === "1") {
        selectAnswer(currentQ.quizNumber, "A");
      } else if (keyUpper === "B" || keyUpper === "2") {
        selectAnswer(currentQ.quizNumber, "B");
      } else if (keyUpper === "C" || keyUpper === "3") {
        selectAnswer(currentQ.quizNumber, "C");
      } else if (keyUpper === "D" || keyUpper === "4") {
        selectAnswer(currentQ.quizNumber, "D");
      } else if (e.key === "ArrowLeft") {
        goToQuestion(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        goToQuestion(currentIndex + 1);
      } else if (keyUpper === "F") {
        toggleFlagCurrentQuestion();
      }
    });
  }

  // Gán sự kiện click cho các nút
  function initEventListeners() {
    // Nút đặt cờ
    if (btnFlagHeader) btnFlagHeader.addEventListener("click", toggleFlagCurrentQuestion);
    if (btnCardFlag) btnCardFlag.addEventListener("click", toggleFlagCurrentQuestion);

    // Nút tạo đề mới
    if (btnNewQuizHeader) {
      btnNewQuizHeader.addEventListener("click", () => {
        if (confirm("Bạn có muốn tạo ngay một bộ đề 40 câu ngẫu nhiên mới không? (Tiến độ bài hiện tại sẽ được làm mới)")) {
          initNewRandomQuiz();
        }
      });
    }
    if (btnNewQuizFooter) {
      btnNewQuizFooter.addEventListener("click", () => {
        if (confirm("Bạn có muốn tạo ngay một bộ đề 40 câu ngẫu nhiên mới không? (Tiến độ bài hiện tại sẽ được làm mới)")) {
          initNewRandomQuiz();
        }
      });
    }

    // Nút điều hướng trong khung câu hỏi
    if (btnPrev) btnPrev.addEventListener("click", () => goToQuestion(currentIndex - 1));
    if (btnNext) btnNext.addEventListener("click", () => goToQuestion(currentIndex + 1));
    if (btnPrevBottom) btnPrevBottom.addEventListener("click", () => goToQuestion(currentIndex - 1));
    if (btnNextBottom) btnNextBottom.addEventListener("click", () => goToQuestion(currentIndex + 1));

    // Nút mở modal nộp bài
    if (btnSubmitInline) btnSubmitInline.addEventListener("click", openSubmitModal);
    if (btnSubmitSidebar) btnSubmitSidebar.addEventListener("click", openSubmitModal);
    if (btnSubmitBottom) btnSubmitBottom.addEventListener("click", openSubmitModal);

    // Modal nộp bài
    if (btnModalCancel) btnModalCancel.addEventListener("click", closeSubmitModal);
    if (btnModalConfirm) btnModalConfirm.addEventListener("click", confirmSubmitQuiz);

    // Màn hình kết quả
    if (btnRestartNew) btnRestartNew.addEventListener("click", initNewRandomQuiz);
    if (btnRestartSame) btnRestartSame.addEventListener("click", restartCurrentQuiz);
    if (btnToggleReview) btnToggleReview.addEventListener("click", toggleReviewDetails);
  }

  // Expose API for testing and programmatic control
  window.TDC_QUIZ = {
    initNewRandomQuiz,
    restartCurrentQuiz,
    confirmSubmitQuiz,
    selectAnswer,
    goToQuestion,
    getQuestions: () => quizQuestions,
    getUserAnswers: () => userAnswers
  };

  // Khởi động ứng dụng
  function initApp() {
    initEventListeners();
    initKeyboardEvents();

    const restored = loadQuizState();
    if (restored) {
      startTimer();
      renderCurrentQuestion();
      renderPalette();
      updateGlobalCounters();
    } else {
      initNewRandomQuiz();
    }
  }

  // Chờ nạp DOM xong
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }

})();
