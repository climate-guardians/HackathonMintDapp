import React, { useState } from 'react';
import { Image, Layout, Tabs } from "antd";
import { Container, Box, Heading, Text, Button, Link } from 'theme-ui';
import BannerImage from 'assets/curupira.png';
const BANNER_DATA = {
  title: 'Welcome to Climate Guardians',
  text:
    'The play and earn Game with real world impact on Climate Change.',
  button: {
    link: '#',
    label: 'Save the Amazon',
  },
  videoBtn: {
    link: '#',
    label: 'White paper',
  },
  bannerImage: BannerImage,
};

const Banner = () => {
  const { title, text, button, videoBtn, bannerImage } = BANNER_DATA;
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <Box as="section" id="banner" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.content}>
          <Heading as="h1">{title}</Heading>
          <Text as="p">{text}</Text>
          <Box sx={styles.btnWrap}>
            {/* <Link href={button.link} sx={styles.btn}>
              {button.label}
            </Link> */}
          </Box>
        </Box>

        <Box sx={styles.sectionImage}>
          <Image
            src={BannerImage}
            alt="Banner Mockup"
            width={521}
            height={652}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    overflow: 'hidden',
    pt: ['115px', null, null, '140px', '150px', '170px', '185px'],
    pb: ['60px', '75px', null, '90px', '110px', '120px', '140px', '160px'],
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: ['column', null, null, 'row'],
  },
  content: {
    maxWidth: ['100%', null, null, '355px', '460px', '545px', null, '590px'],
    textAlign: ['center', null, null, 'left'],
    h1: {
      fontSize: ['28px', '32px', null, '34px', '40px', '48px', '54px', '58px'],
      lineHeight: [1.4, null, null, 1.35],
      color: 'heading',
      fontFamily: 'archivo',
      letterSpacing: '-1.5px',
      fontWeight: 'body',
      mx: ['0', null, null, 'auto', '0'],
    },
    p: {
      fontSize: ['15px', null, null, null, '16px', '17px'],
      lineHeight: [1.85, null, 1.9, null, 2, 2.47],
      color: 'text',
      mt: [3, null, null, '18px'],
      pr: [0, null, null, null, null, null, null, '50px'],
    },
  },
  btnWrap: {
    display: 'flex',
    alignItems: 'center',
    mt: ['25px', null, null, '30px', '35px', '50px'],
    justifyContent: ['center', null, null, 'flex-start'],
  },
  btn: {
    backgroundColor: '#EEF1F4',
    borderRadius: '5px',
    fontSize: ['13px', '14px', '15px'],
    padding: ['14px 20px 13px', '14px 25px 13px', '17px 30px 15px'],
    lineHeight: 1,
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: 'rgba(2,7,62,.7)',
    transition: 'all 300ms ease',
    '&:hover': {
      backgroundColor: 'primary',
      color: '#ffffff',
    },
  },
  videoBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: 'heading_secondary',
    cursor: 'pointer',
    textTransform: 'uppercase',
    padding: 0,
    fontSize: ['13px', null, '15px', null, '17px'],
    fontWeight: 700,
    fontFamily: 'body',
    ml: ['20px', null, null, '25px', '30px'],
    outline: 'none',
    svg: {
      ml: [1, null, 2],
      fontSize: ['17px', '18px', '20px'],
      position: 'relative',
      top: '-1px',
    },
  },
  sectionImage: {
    mt: ['40px', null, null, 0],
    pl: [0, null, null, '30px', 0],
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    right: ['auto', null, null, null, '-10px', '-50px', '-70px'],
    width: [
      null,
      null,
      null,
      'calc(100% - 355px)',
      'calc(100% - 460px)',
      'calc(100% - 545px)',
      null,
      'calc(100% - 590px)',
    ],
    textAlign: ['center', null],
  },
};