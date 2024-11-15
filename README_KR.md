<div align="center">

# StatusWatch

<img src="https://cdn.jsdelivr.net/npm/heroicons/24/outline/chart-bar.svg" width="120" alt="StatusWatch Logo" style="stroke: #3b82f6;" />

<p align="center">
  <strong>실시간 웹사이트 모니터링 대시보드</strong><br>
  웹사이트의 가동시간, 응답 시간, SSL 인증서 상태를 손쉽게 모니터링하세요
</p>

<p align="center">
  <a href="README.md">
    <img src="https://img.shields.io/badge/EN-English-blue?style=flat-square" alt="English" />
  </a>
  &nbsp;
  <a href="README_KR.md">
    <img src="https://img.shields.io/badge/KR-한국어-red?style=flat-square" alt="Korean" />
  </a>
</p>

<p align="center">
  <a href="#-주요-기능">주요 기능</a> •
  <a href="#-미리보기">미리보기</a> •
  <a href="#-기술-스택">기술 스택</a> •
  <a href="#-시작하기">시작하기</a> •
  <a href="#-사용법">사용법</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/yourusername/statuswatch?style=flat-square" />
  <img src="https://img.shields.io/github/stars/yourusername/statuswatch?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/yourusername/statuswatch?style=flat-square" />
</p>

</div>

## ✨ 주요 기능

<div align="center">
<img src="https://github.com/user-attachments/assets/40e4e5ca-bbd0-4c6b-8a51-049df3154680" alt="StatusWatch Features" width="100%" style="border-radius: 8px; margin: 20px 0;" />
</div>

### ⚡ 실시간 모니터링
- **자동 체크** - 30초마다 자동으로 상태 확인
- **응답 시간 추적** - 밀리초 단위의 정확한 응답 시간 측정
- **가동률 계산** - 실시간 가동률 통계 제공

### 🔒 SSL 인증서 모니터링
- **상세 정보 제공** - 인증서 세부 정보 실시간 확인
- **만료 알림** - 인증서 만료 사전 알림 기능
- **발급자 검증** - 인증 기관 정보 확인

### 📊 성능 분석
- **응답 시간 그래프** - 시각적 성능 분석
- **이력 데이터** - 과거 데이터 추적 관리
- **통계 분석** - 종합적인 성능 지표 제공

### 🚨 상태 알림
- **시각적 표시** - 직관적인 상태 표시등
- **성능 저하 감지** - 자동 성능 저하 감지
- **다운타임 추적** - 정확한 다운타임 기록

## 🖥️ 미리보기

<div align="center">
  <img src="https://github.com/user-attachments/assets/40e4e5ca-bbd0-4c6b-8a51-049df3154680" alt="Dashboard Preview" width="100%" style="border-radius: 8px;" />
</div>

## 🛠️ 기술 스택

<div align="center">
  <table>
    <tr>
      <td align="center" width="96">
        <a href="https://reactjs.org">
          <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
        </a>
        <br>React 18
      </td>
      <td align="center" width="96">
        <a href="https://www.typescriptlang.org">
          <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
        </a>
        <br>TypeScript
      </td>
      <td align="center" width="96">
        <a href="https://tailwindcss.com">
          <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
        </a>
        <br>Tailwind
      </td>
      <td align="center" width="96">
        <a href="https://vitejs.dev">
          <img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="Vite" />
        </a>
        <br>Vite
      </td>
    </tr>
  </table>
</div>

## 🚀 시작하기

```bash
# 저장소 클론
git clone https://github.com/yourusername/statuswatch.git

# 디렉토리 이동
cd statuswatch

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 📱 사용법

<div class="usage-grid" align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://cdn.jsdelivr.net/npm/heroicons/24/solid/plus-circle.svg" width="48" style="stroke: #3b82f6; fill: #3b82f6;"/>
        <br/><strong>웹사이트 추가</strong>
        <br/>Add Website 버튼 클릭
      </td>
      <td align="center">
        <img src="https://cdn.jsdelivr.net/npm/heroicons/24/solid/computer-desktop.svg" width="48" style="stroke: #3b82f6; fill: #3b82f6;"/>
        <br/><strong>실시간 모니터링</strong>
        <br/>대시보드에서 상태 확인
      </td>
      <td align="center">
        <img src="https://cdn.jsdelivr.net/npm/heroicons/24/solid/chart-bar.svg" width="48" style="stroke: #3b82f6; fill: #3b82f6;"/>
        <br/><strong>상세 정보</strong>
        <br/>세부 정보 분석
      </td>
      <td align="center">
        <img src="https://cdn.jsdelivr.net/npm/heroicons/24/solid/shield-check.svg" width="48" style="stroke: #3b82f6; fill: #3b82f6;"/>
        <br/><strong>SSL 관리</strong>
        <br/>인증서 상태 확인
      </td>
    </tr>
  </table>
</div>

## ⚙️ 설정

기본 모니터링 주기는 30초로 설정되어 있습니다. `src/hooks/useMonitoring.ts` 파일에서 변경 가능합니다:

```typescript
const CHECK_INTERVAL = 30000; // 30초
```

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m '새로운 기능 추가'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

## 👨‍💻 제작자

<div align="center">
  <img src="https://github.com/yourusername.png" width="100" style="border-radius: 50%"/>
  <br/>
  <strong>Your Name</strong>
  <br/>
  <a href="https://github.com/yourusername">@yourusername</a>
  <br/><br/>
  <a href="https://twitter.com/yourusername">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
  </a>
  &nbsp;
  <a href="https://linkedin.com/in/yourusername">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</div>

<div align="center">

## ⭐ 지원하기

이 프로젝트가 도움이 되었다면 ⭐️를 눌러주세요!

</div>

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/yourusername">Your Name</a></sub>
</div>
