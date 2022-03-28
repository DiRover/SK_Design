/* eslint-disable */
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { isMobile } from 'react-device-detect';
import { FC } from 'react';
import logo from '../assets/logo.png';

const Header = styled(Typography)({
  fontFamily: 'var(--font-family)',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '1.5rem',
  marginTop: '2.5rem',
});

const Container = styled.div`
  max-width: 940px;
`;

const TextContainer = styled.div`
  fontFamily: 'var(--font-family)';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  max-width: 940px;
  margintop: 2.5rem;
`;

const ImgContainer = styled.img<{isMobile: boolean}>`
  width: ${isMobile ? '100%' : 'auto'};
`;

const Text: FC = () => (
  <Container>
    <ImgContainer isMobile src={logo} alt="logo" />
    <Header>Оставьте заявку и станьте частью нашей команды</Header>
    <TextContainer>
      <p>
        Компания SK Design приглашает к взаимовыгодному сотрудничеству
        креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и
        интерьерные студии — все, кто дизайн интерьера сделали своим
        призванием.
      </p>
      <p>
        Партнерство мы видим как доверительные отношения, основанные на
        честности реализации бизнес идей в сфере создания и продаж
        современной, качественной, удобной, функциональной и эксклюзивной
        мебели.
      </p>
      <p>
        Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете
        интерьеры жилых или коммерческих помещений — мы с радостью поможем
        Вам: составим уникальные условия сотрудничества, предоставим 3D модели
        (уточняйте у менеджеров) и разработаем коммерческое предложение к
        Вашему проекту или изображениям.
      </p>
    </TextContainer>
  </Container>
);

export default Text;
