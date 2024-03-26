// app.js
// JavaScript 코드를 이용해 동적인 동작을 구현합니다.

let currentQuestionIndex = 0;
let answers = {};

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

// 시작 화면 보이기
startScreen.style.display = "flex";
// 질문 화면 숨기기
questionScreen.style.display = "none";
// 결과 화면 숨기기
resultScreen.style.display = "none";

const startButton = document.getElementById("start-button");
const questionCounter = document.getElementById("question-counter");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer-button");
const resultType = document.getElementById("result-type");
const resultImage = document.getElementById("result-image");
const resultDescription = document.getElementById("result-description");
const resultRole = document.getElementById("result-role");
const resultMate = document.getElementById("result-mate");
const restartButton = document.getElementById("restart-button");
const shareButton = document.getElementById("share-button");

// "시작하기" 버튼 클릭 시 질문 화면으로 전환
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  questionScreen.style.display = "flex";
  showQuestion();
});

// 답변 버튼 클릭 시 다음 질문 또는 결과 화면으로 전환
for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", () => {
    const value = parseInt(answerButtons[i].dataset.value);
    const mbtiCode = questions[currentQuestionIndex].type;

    if (!answers.hasOwnProperty(mbtiCode)) {
      answers[mbtiCode] = 0;
    }
    answers[mbtiCode] += value;

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      showResult();
    }
  });
}

// 질문을 보여줍니다.
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionCounter.textContent = `${currentQuestionIndex + 1} / ${
    questions.length
  }`;
  questionElement.textContent = question.question;
}

// 결과 화면을 보여줍니다.
function showResult() {
  questionScreen.style.display = "none";
  resultScreen.style.display = "flex";

  // 결과 계산 및 처리
  const result = calculateResult(); // 결과 계산 함수 구현 필요
  const { role, mate, img, desc } = mbtiTypes[result];

  resultType.textContent = result;
  resultImage.src = img;
  resultDescription.textContent = desc;
  resultRole.textContent = role;
  resultMate.textContent = mate;
}

// "시작화면으로 되돌아가기" 버튼 클릭 시 시작 화면으로 전환
restartButton.addEventListener("click", () => {
  resultScreen.style.display = "none";
  startScreen.style.display = "flex";
  resetTest();
});

// "공유하기" 버튼 클릭 시 공유 기능 구현 (예: SNS 공유 링크 생성)
shareButton.addEventListener("click", () => {
  // 공유 기능 구현
  var url = window.location.href;

  //web share api 지원 확인
  if (navigator.share) {
    // 되면 사용해서 공유
    navigator
      .share({
        title: document.title,
        url: url,
      })
      .then(function () {
        console.log("페이지 공유 성공");
      })
      .catch(function (error) {
        console.error("페이지 공유 실패:", error);
        copyUrlToClipboard(url);
        showNotification("URL이 클립보드에 복사되었습니다.");
      });
  } else {
    console.log("Web share API를 지원하지 않습니다.");
    copyUrlToClipboard(url);
    showNotification("URL이 클립보드에 복사되었습니다.");
  }
});

// url 클립보드 복사 함수
function copyUrlToClipboard(url) {
  var tempInput = document.createElement("input");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-1000px";
  tempInput.value = url;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// 알림 메시지를 표시하는 함수
function showNotification(message) {
  if ("Notification" in window) {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        new Notification(message);
      }
    });
  } else if ("alert" in window) {
    alert(message);
  }
}
// 테스트 초기화
function resetTest() {
  currentQuestionIndex = 0;
  answers = {};
}

// 결과 계산 함수 구현
function calculateResult() {
  let resultType = "";

  const EI = answers.E > answers.I ? "E" : "I";
  const NS = answers.N > answers.S ? "N" : "S";
  const TF = answers.T > answers.F ? "T" : "F";
  const JP = answers.J > answers.P ? "J" : "P";

  resultType = EI + NS + TF + JP;
  return resultType;
}
