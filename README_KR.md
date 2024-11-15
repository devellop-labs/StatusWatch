# StatusWatch

[![English](https://img.shields.io/badge/lang-English-blue.svg)](README.md)
[![한국어](https://img.shields.io/badge/lang-한국어-red.svg)](README_KR.md)

<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/activity.svg" width="120" alt="StatusWatch 로고" />
  <h3>실시간 웹사이트 모니터링 대시보드</h3>
  <p>웹사이트의 가동시간, 응답 시간, SSL 인증서 상태를 쉽게 모니터링하세요.</p>
</div>

## 주요 기능

- 🔍 **실시간 모니터링**
  - 30초마다 자동 점검
  - 응답 시간 추적
  - 가동률 계산

- 🔒 **SSL 인증서 모니터링**
  - 상세 인증서 정보
  - 만료 알림
  - 발급자 검증
  - 전체 인증서 세부정보 (CN, O, OU)

- 📊 **성능 분석**
  - 응답 시간 그래프
  - 이력 데이터 추적
  - 가동률 통계

- 🚨 **상태 알림**
  - 시각적 상태 표시
  - 성능 저하 감지
  - 다운타임 추적

## 기술 스택

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Recharts
- Lucide Icons

## 시작하기

1. 저장소 클론:
   ```bash
   git clone https://github.com/yourusername/statuswatch.git
   ```

2. 의존성 설치:
   ```bash
   cd statuswatch
   npm install
   ```

3. 개발 서버 시작:
   ```bash
   npm run dev
   ```

4. 프로덕션 빌드:
   ```bash
   npm run build
   ```

## 사용 방법

1. "웹사이트 추가" 버튼을 통해 모니터링할 웹사이트 추가
2. 대시보드에서 실시간 상태 업데이트 확인
3. "상세 보기"를 클릭하여 각 웹사이트의 상세 정보 확인
4. SSL 인증서 상태 및 만료일 모니터링

## 설정

모니터링 간격은 기본적으로 30초로 설정되어 있습니다. `src/hooks/useMonitoring.ts`에서 수정할 수 있습니다:

```typescript
const CHECK_INTERVAL = 30000; // 30초
```

## 기여하기

1. 저장소 포크
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m '새로운 기능 추가'`)
4. 브랜치에 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 감사의 글

- [Lucide Icons](https://lucide.dev/) - 아이콘 제공
- [Tailwind CSS](https://tailwindcss.com/) - 스타일링
- [Recharts](https://recharts.org/) - 차트
- [Vite](https://vitejs.dev/) - 빌드 도구

## 작성자

Your Name - [@yourusername](https://github.com/yourusername)

## 지원

이 프로젝트가 도움이 되었다면 ⭐️를 눌러주세요!