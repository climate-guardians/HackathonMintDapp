import React from 'react';
import { Container, Box, Heading, Text } from 'theme-ui';
import { Button, Modal } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import BannerImage from "../img/curupira.png";
const BANNER_DATA = {
  title: 'Welcome to Climate Guardians',
  text:
    'The play and earn Game with real world impact on Climate Change.',
  subtitle: 'Save the Amazon',
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

// const { Title } = Typography;

export default function BannerLanding() {

  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  
  async function donation(val){

    //Moralis Donation Logic
    let options = {
      // contractAddress: "0xCc4D0600885c69Fdba19De5A54957dF939459254",
      contractAddress: "0x79f9e5ca1B23ce86970557EE003CcA5680EB200a",
      functionName: "newDonation",
      abi: [{"inputs":[{"internalType":"string","name":"note","type":"string"}],"name":"newDonation","outputs":[],"stateMutability":"payable","type":"function"}],
      params: {
        note: "Thanks with your work"
      },
      msgValue: Moralis.Units.ETH(val)
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        let secondsToGo = 3;
        const modal = Modal.success({
          title: "Success!", 
          content: `Thank you for the ${val} ETH Donation`,
        });
        setTimeout(() => {
          modal.destroy();
        }, secondsToGo * 1000);
      }
    })
  }


  const { title, text, subtitle } = BANNER_DATA;
  
  return (
    <Box as="section" id="banner" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.content}>
          <Heading as="h1">{title}</Heading>
          <Text as="p">{text}</Text>
          <Box sx={styles.btnWrap}>
            <div>
            <Heading as="h1">{subtitle}</Heading>
              <Button shape="round" onClick={() => donation(0.1)}>Donate 0.1 ETH</Button>
              <a 
              // href={`https://rinkeby.etherscan.io/address/0xCc4D0600885c69Fdba19De5A54957dF939459254`}
              href={`https://testnet.snowtrace.io/tx/0x07e73694ac495e821675ae1438f5eed3f0f3d7861f8a86a89b4470a38f5baa6f`}
              target="_blank"
              rel="noreferrer"
              >
              <SelectOutlined style={{ marginLeft: "5px" }} />
              View on Snowtrace
              </a>
            </div>
          </Box>
        </Box>

        <Box sx={styles.sectionImage}>
          <img
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

const styles = {
  section: {
    overflow: 'hidden',
    // pt: ['115px', null, null, '140px', '150px', '170px', '185px'],
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
