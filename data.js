// 각 유형 코드에 해당하는 질문들을 배열에 저장합니다.
const allQuestions = {
  E: [
    "당신은 사람들과 함께 있을 때 에너지를 얻는 편인가요?",
    "사회적인 행사에서 어떤 역할을 맡거나 주도적으로 참여하시는 편인가요?",
    "외부 환경과 사건들에 대한 관심과 호기심을 가지고 있나요?",
    "타인과 함께 일하면서 의사소통과 협업을 즐기시나요?",
    "새로운 사람들과 쉽게 친구가 되는 경향이 있나요?",
    "활동적인 환경에서 일하는 것을 선호하시나요?",
    "다른 사람들의 의견과 아이디어를 경청하고 반영하는 것을 좋아하시나요?",
    "타인과의 상호작용을 통해 아이디어와 에너지를 얻는 편인가요?",
  ],
  I: [
    "혼자만의 시간을 보내는 것을 즐기시나요?",
    "조용하고 고요한 장소에서 에너지를 얻는 편인가요?",
    "내면적인 세계와 개인적인 경험에 대한 관심이 많나요?",
    "혼자서 과제를 수행하거나 사고를 깊게 하는 것을 선호하시나요?",
    "깊은 관계를 형성하는 데 시간이 걸리지만 오래 유지하는 편인가요?",
    "조용하고 평온한 환경에서 일하는 것을 선호하시나요?",
    "자신만의 생각과 아이디어를 중요시하는 경향이 있나요?",
    "혼자 있는 동안에도 내적으로 풍부한 상상력과 아이디어를 가지고 있나요?",
  ],
  N: [
    "미래에 대한 비전과 가능성에 관심과 흥미를 가지고 있나요?",
    "추상적인 개념과 이론에 대해 탐구하고 이해하려는 경향이 있나요?",
    "새로운 아이디어와 가능성에 열린 마음을 가지고 있나요?",
    "상상력을 기반으로 창의적인 해결책을 찾는 것을 좋아하시나요?",
    "현재의 상황보다는 미래의 가능성과 경향성에 관심이 많나요?",
    "다양한 관점과 패턴을 연결시키는 것에 재능을 가지고 있나요?",
    "실제 사실보다는 의미와 심미성에 더욱 집중하는 경향이 있나요?",
    "복잡한 문제에 대해 다양한 해결 방안을 고려하고 시도해 보는 편인가요?",
  ],
  S: [
    "현재의 상황과 사실에 집중하고 세부 사항을 중요시하시나요?",
    "경험과 실제 경험에 의존하여 문제를 해결하는 편인가요?",
    "실제적이고 구체적인 정보를 기반으로 판단하시나요?",
    "사실적인 관찰력과 기억력을 가지고 있나요?",
    "현재의 상황에서 바로 적용 가능한 해결책을 선호하시나요?",
    "실제적인 세부 사항과 사물에 대한 관심과 관찰력이 뛰어나시나요?",
    "일상적이고 실용적인 문제를 해결하는 것을 좋아하시나요?",
    "실제 사실에 기반을 둔 계획과 목표를 세우는 것을 선호하시나요?",
  ],
  T: [
    "문제를 해결할 때 객관적인 분석과 논리적인 사고를 중요시하시나요?",
    "객관적인 원칙과 규칙에 따라 판단하시나요?",
    "감정보다는 분석과 사실에 의존하여 결정을 내리시나요?",
    "논리적인 사고와 인과관계를 통해 문제를 해결하시나요?",
    "정확한 정보와 명확한 사실에 기반하여 판단하시나요?",
    "객관적인 판단과 논리적인 근거를 제시하는 것을 좋아하시나요?",
    "논리와 분석을 통해 문제에 접근하고 해결하는 것을 선호하시나요?",
    "객관적인 판단과 원칙을 기반으로 결정을 내리는 것을 중요시하시나요?",
  ],
  F: [
    "다른 사람들의 감정과 필요를 고려하는 것을 좋아하시나요?",
    "상대방의 감정에 민감하게 대응하고 공감하는 편인가요?",
    "자신의 가치관과 타인의 가치관을 중요시하고 존중하시나요?",
    "조화롭고 화합적인 분위기를 조성하는 것을 좋아하시나요?",
    "타인의 의견과 감정을 고려하여 의사결정을 내리시나요?",
    "다른 사람들의 필요를 이해하고 도움을 주는 것을 즐기시나요?",
    "갈등 상황에서 감정적인 해결책을 찾는 것을 선호하시나요?",
    "자신의 감정을 중요시하고, 감정적인 결정을 내리는 경향이 있나요?",
  ],
  J: [
    "일정과 계획을 따르는 것을 선호하시나요?",
    "구조화된 환경에서 일하고 계획을 세우는 것을 좋아하시나요?",
    "일을 끝내고 마무리하는 것을 중요시하시나요?",
    "계획에 따라 진행되는 것을 좋아하시나요?",
    "결정을 내리고 실행하기 전에 충분한 정보와 계획을 수립하시나요?",
    "조직적이고 체계적으로 일하는 것을 선호하시나요?",
    "일을 완수하고 목표를 달성하는 것에 만족감을 느끼시나요?",
    "일의 순서와 계획에 따라서 진행하는 것을 좋아하시나요?",
  ],
  P: [
    "유연하고 적응력이 높은 편인가요?",
    "새로운 정보와 경험에 대해 호기심을 가지고 있나요?",
    "계획보다는 즉흥적으로 일을 처리하는 편인가요?",
    "상황에 따라 계획을 변경하거나 새로운 방향으로 나아가는 것을 좋아하시나요?",
    "다양한 옵션과 가능성을 탐색하고 결정을 미루는 경향이 있나요?",
    "새로운 정보와 변화에 민감하게 반응하고 즐기시나요?",
    "자유로운 사고와 융통성을 가지고 일하시나요?",
    "일을 미루는 것을 좋아하지 않고 신속하게 처리하는 편인가요?",
  ],
};

// 유형 코드별로 4개의 랜덤 질문을 뽑는 함수
function getRandomQuestions(typeCode) {
  const typeQuestions = allQuestions[typeCode]; // 해당 유형 코드에 대한 모든 질문들
  const selectedQuestions = [];

  // 무작위로 4개의 질문을 선택합니다.
  while (selectedQuestions.length < 4) {
    const randomIndex = Math.floor(Math.random() * typeQuestions.length);
    const randomQuestion = typeQuestions[randomIndex];

    // 이미 선택된 질문인지 확인합니다.
    if (!selectedQuestions.includes(randomQuestion)) {
      selectedQuestions.push(randomQuestion);
    }
  }

  return selectedQuestions.map((question) => ({ question, type: typeCode }));
}

// 각 유형 코드에 대해 4개의 랜덤 질문을 뽑습니다.
const selectedEQuestions = getRandomQuestions("E");
const selectedIQuestions = getRandomQuestions("I");
const selectedNQuestions = getRandomQuestions("N");
const selectedSQuestions = getRandomQuestions("S");
const selectedTQuestions = getRandomQuestions("T");
const selectedFQuestions = getRandomQuestions("F");
const selectedJQuestions = getRandomQuestions("J");
const selectedPQuestions = getRandomQuestions("P");

// 모든 선택된 질문들을 하나의 배열로 합칩니다.
const allSelectedQuestions = [
  ...selectedEQuestions,
  ...selectedIQuestions,
  ...selectedNQuestions,
  ...selectedSQuestions,
  ...selectedTQuestions,
  ...selectedFQuestions,
  ...selectedJQuestions,
  ...selectedPQuestions,
];

// 결과를 섞기 위해 Fisher-Yates 알고리즘을 사용합니다.
for (let i = allSelectedQuestions.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [allSelectedQuestions[i], allSelectedQuestions[j]] = [
    allSelectedQuestions[j],
    allSelectedQuestions[i],
  ];
}

// console.log("Shuffled questions:", allSelectedQuestions);

const questions = allSelectedQuestions;

const mbtiTypes = {
  ENTJ: {
    role: "추천 직업 : 경영 컨설턴트, 공인 중개사, 관리사, 변호사, 재무 상담사, 경제 분석가, 벤처 투자가, 판사",
    mate: "당신과 잘맞는 MBTI : INFP, INTP",
    img: "ENTJ.jpg",
    desc: "특징 : 지도력있고 결단력이 있는 사람",
  },
  ENTP: {
    role: "추천 직업 : 발명가, 벤처 사업가, 에이전트, 배우, 가수, 영화감독, 칼럼니스트, 정치인",
    mate: "당신과 잘맞는 MBTI : INFJ, INTJ",
    img: "ENTP.jpg",
    desc: "특징 : 독창적이고 논쟁을 좋아하는 사람",
  },
  ENFJ: {
    role: "추천 직업 : 아나운서, 리포터, 방송 MC, 언어교사, 아동 복지사, CEO, 취업 컨설턴트, 동시 통역가    ",
    mate: "당신과 잘맞는 MBTI : INFP, ISFP",
    img: "ENFJ.jpg",
    desc: "특징 : 사회적이고 친절한 사람",
  },
  ENFP: {
    role: "추천 직업 : 크리에이티브 디렉터, 디자이너, 시나리오 작가, 방송 프로듀서, 홍보 컨설턴트, 상담사, 상품 기획자",
    mate: "당신과 잘맞는 MBTI : INFJ, INTJ",
    img: "ENFP.jpg",
    desc: "특징 : 열정적이고 상상력이 풍부한 사람",
  },
  ESTJ: {
    role: "추천 직업 : 감독관, 예산 분석가, 은행장, 정책 책임자, 보안 요원, 기관사, 교육",
    mate: "당신과 잘맞는 MBTI : ISFP, ISTP",
    img: "ESTJ.jpg",
    desc: "특징 : 현실적이고 실용적이며 책임감 있는 사람",
  },
  ESTP: {
    role: "추천 직업 : 경찰관, 소방관, 군 장교, 펀드 매니저, 은행원, 기자, 여행 가이드, 건축 엔지니어",
    mate: "당신과 잘맞는 MBTI : ISFJ, ISTJ",
    img: "ESTP.jpg",
    desc: "특징 : 대담하고 실행력이 강한 사람",
  },
  ESFJ: {
    role: "추천 직업 : 홍보 책임자, 호텔 지배인, 마케팅 책임자, 초등학교 교사, 특수 교사, 비서, 유치원 교사",
    mate: "당신과 잘맞는 MBTI : ISFP, ISTP",
    img: "ESFJ.jpg",
    desc: "특징 : 사교적이고 관대하며 협조적인 사람",
  },
  ESFP: {
    role: "추천 직업 : 코미디언, 의상 디자이너, 일러스트레이터, 애니메이터, 여행 상품 기획자, 놀이 치료사",
    mate: "당신과 잘맞는 MBTI : ISFJ, ISTJ",
    img: "ESFP.jpg",
    desc: "특징 : 외향적이고 사교적인 사람",
  },
  INTJ: {
    role: "추천 직업 : 분석가, 회계사, 인류학자, 파일럿, 경영 컨설턴트, 제약회사 연구원, 웹 개발자, 최고 재무 책임자",
    mate: "당신과 잘맞는 MBTI : ENFP, ENTP",
    img: "INTJ.jpg",
    desc: "특징 : 창의적이고 전략적이며 독립적인 사람",
  },
  INTP: {
    role: "추천 직업 : 경제학자, 심리학자, 경찰, 프로그래머, 천문학자, 비평가, 아트디렉터, 연구원",
    mate: "당신과 잘맞는 MBTI : ENTJ, ESTJ",
    img: "INTP.jpg",
    desc: "특징 : 분석적이고 논리적인 사람",
  },
  INFJ: {
    role: "추천 직업 : 직업상담사, 특수 교사, 노인 복지사, 아트 디렉터, 프리랜서 기획, 저널리스트, 상품기획 MD",
    mate: "당신과 잘맞는 MBTI : ENFP, ENTP",
    img: "INFJ.jpg",
    desc: "특징 : 비전을 갖추고 이상적이며 온정적인 사람",
  },
  INFP: {
    role: "추천 직업 : 예술가, 소설가, 시인, 음악가, 미술 치료사, 사회복지사, 작곡가, 사서",
    mate: "당신과 잘맞는 MBTI : ENFJ, ENTJ",
    img: "INFP.jpg",
    desc: "특징 : 이상적이고 인화력이 뛰어난 사람",
  },
  ISTJ: {
    role: "추천 직업 : 통계학자, 바이어, 기상학자, 법률 연구원, 보험 심사관, 형사, 감정 평가사, 세관 조사관",
    mate: "당신과 잘맞는 MBTI : ESFP, ESTP",
    img: "ISTJ.jpg",
    desc: "특징 : 신중하고 체계적이며 실용적인 사람",
  },
  ISTP: {
    role: "추천 직업 : 파일럿, 카레이서, 범죄학자, 사진 작가, 판매원, 운동선수, 항공기 정비사, 네트워크 관리자",
    mate: "당신과 잘맞는 MBTI : ESFJ, ESTJ",
    img: "ISTP.jpg",
    desc: "특징 : 호기심이 많고 탐구심이 강한 사람",
  },
  ISFJ: {
    role: "추천 직업 : 행정 보조원, 인사 관리자, 신용 상담가, 보호 감찰관, 물리치료사, 정신과 의사, 방사선 기사",
    mate: "당신과 잘맞는 MBTI : ESFP, ESTP",
    img: "ISFJ.jpg",
    desc: "특징 : 협조적이고 섬세하며 책임감 있는 사람",
  },
  ISFP: {
    role: "추천 직업 : 보석 세공사, 음향 디자이너, 만화가, 지질학자, 사육사, 수의사, 법률 비서, 약사",
    mate: "당신과 잘맞는 MBTI : ENFJ, ESFJ, ESTJ",
    img: "ISFP.jpg",
    desc: "특징 : 온화하고 예술적인 사람",
  },
};
