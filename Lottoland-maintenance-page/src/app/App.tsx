import { motion } from "motion/react";
import svgPaths from "../imports/Mobile/svg-ev8am2avgo";
import imgImage3 from "../imports/Mobile/55e5ace5a43555cc9e66c49e41ffc9b3e4a08af3.png";
import imgImage4 from "../imports/Mobile/b9f76050681da14e0b21dffed1faf8451dc21f9d.png";
import imgImage6 from "../imports/Mobile/4ab4d6e74aefdab88f9f608b06360f01a464602c.png";
import { imgGroup, imgImage2 } from "../imports/Mobile/svg-dmvnh";
import LottolandLogo from "../imports/LottolandLogo/LottolandLogo";
import imgManDesktop from "../imports/image.png";

function Group() {
  return (
    <div className="absolute inset-[0.34%_0.33%_2.29%_0.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.465px_-0.136px] mask-size-[143.966px_39.038px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.036 38.7714">
        <g id="Group">
          <path d={svgPaths.p19b2bd80} fill="var(--fill-0, #20F15F)" id="Vector" />
          <path d={svgPaths.p38470780} fill="var(--fill-0, #20F15F)" id="Vector_2" />
          <path d={svgPaths.p29ec7480} fill="var(--fill-0, #20F15F)" id="Vector_3" />
          <path d={svgPaths.p3b139600} fill="var(--fill-0, #20F15F)" id="Vector_4" />
          <path d={svgPaths.p6aa5e00} fill="var(--fill-0, #20F15F)" id="Vector_5" />
          <path d={svgPaths.pa1c5600} fill="var(--fill-0, #20F15F)" id="Vector_6" />
          <path d={svgPaths.p3207a8c0} fill="var(--fill-0, #20F15F)" id="Vector_7" />
          <path d={svgPaths.p213836c0} fill="var(--fill-0, #20F15F)" id="Vector_8" />
          <path d={svgPaths.pbf45d80} fill="var(--fill-0, #20F15F)" id="Vector_9" />
          <path d={svgPaths.p2be40500} fill="var(--fill-0, #20F15F)" id="Vector_10" />
          <path d={svgPaths.p3ccc6380} fill="var(--fill-0, #20F15F)" id="Vector_11" />
          <path d={svgPaths.p278ef200} fill="var(--fill-0, #20F15F)" id="Vector_12" />
          <path d={svgPaths.p38485580} fill="var(--fill-0, #20F15F)" id="Vector_13" />
          <path d={svgPaths.p16b48c00} fill="var(--fill-0, #20F15F)" id="Vector_14" />
          <path d={svgPaths.p1e50e700} fill="var(--fill-0, #20F15F)" id="Vector_15" />
          <path d={svgPaths.p3d5d0a00} fill="var(--fill-0, #20F15F)" id="Vector_16" />
          <path d={svgPaths.p1e19cc80} fill="var(--fill-0, #20F15F)" id="Vector_17" />
          <path d={svgPaths.p1ca436f2} fill="var(--fill-0, #20F15F)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.01%_1.96%_0.01%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function LogoLottolandMobile() {
  return (
    <motion.div
      className="h-[39.82px] overflow-visible relative shrink-0 w-[144px]"
      data-name="Logo-lottoland"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ClipPathGroup />
    </motion.div>
  );
}

function LogoLottolandDesktop() {
  return (
    <motion.div
      className="h-[58px] relative shrink-0 w-[215px]"
      data-name="Logo-lottoland"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <LottolandLogo />
    </motion.div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-[-28px] md:top-[-42px]" data-name="Mask group">
      <div className="absolute h-[202.884px] left-[42.99px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.703px_-28.266px] mask-size-[234.845px_225.794px] top-[33.07px] w-[253.505px] md:h-[340px] md:left-[64px] md:top-[49px] md:w-[424px]" data-name="image 2" style={{ maskImage: `url('${imgImage2}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function FlashPinkMobile() {
  return (
    <motion.div
      className="absolute h-[66px] left-[19px] top-[28px] w-[80px]"
      data-name="Flash=Pink 1"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 66">
        <g clipPath="url(#clip0_1_66)" id="Flash=Pink 1">
          <path d={svgPaths.p388c5700} fill="var(--fill-0, #FF008C)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_66">
            <rect fill="white" height="66" width="80" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

function FlashPinkDesktop() {
  return (
    <motion.div
      className="absolute h-[99px] left-[28px] top-[42px] w-[120px]"
      data-name="Flash=Pink 1"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 66">
        <g clipPath="url(#clip0_1_66_desktop)" id="Flash=Pink 1">
          <path d={svgPaths.p388c5700} fill="var(--fill-0, #FF008C)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_66_desktop">
            <rect fill="white" height="66" width="80" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

function WormYellow() {
  return (
    <div className="h-[55px] relative w-[87px]" data-name="Worm=Yellow 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 55">
        <g id="Worm=Yellow 1">
          <path d={svgPaths.p30c0c180} fill="var(--fill-0, #FFF500)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IllustrationFrameMobile() {
  return (
    <motion.div
      className="h-[236px] relative shrink-0 w-[321px]"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="absolute flex inset-[-11.86%_0_-16.74%_0] items-center justify-center"
        style={{ containerType: "size" }}
        animate={{ rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex-none h-[hypot(31.0483cqw,60.2656cqh)] rotate-[-28.58deg] w-[hypot(68.9517cqw,-39.7344cqh)]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252.058 208.305">
              <path d={svgPaths.p33a60780} fill="var(--fill-0, #FF6F00)" id="Vector" />
            </svg>
          </div>
        </div>
      </motion.div>
      <MaskGroup />
      <div className="absolute h-[122px] left-[43px] top-[33px] w-[253px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[166.3%] left-0 max-w-none top-[0.05%] w-[100.2%]" src={imgImage3} />
        </div>
      </div>
      <FlashPinkMobile />
      <motion.div
        className="absolute flex h-[89.863px] items-center justify-center left-[201px] top-[129px] w-[102.703px]"
        style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}
        animate={{ rotate: [-28.52, -25, -28.52, -32, -28.52] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex-none rotate-[-28.52deg]">
          <WormYellow />
        </div>
      </motion.div>
    </motion.div>
  );
}

function IllustrationFrameDesktop() {
  return (
    <motion.div
      className="h-[420px] relative shrink-0 w-[500px]"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="absolute flex inset-[-11.86%_0_-16.74%_0] items-center justify-center"
        style={{ containerType: "size" }}
        animate={{ rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex-none h-[hypot(31.0483cqw,60.2656cqh)] rotate-[-28.58deg] w-[hypot(68.9517cqw,-39.7344cqh)]">
          <div className="relative size-full" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252.058 208.305">
              <path d={svgPaths.p33a60780} fill="var(--fill-0, #FF6F00)" id="Vector" />
            </svg>
          </div>
        </div>
      </motion.div>
      <div className="absolute h-[280px] left-[80px] top-[60px] w-[340px]" data-name="image-desktop">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgManDesktop} />
      </div>
      <FlashPinkDesktop />
      <motion.div
        className="absolute flex h-[135px] items-center justify-center left-[350px] top-[250px] w-[154px]"
        style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}
        animate={{ rotate: [-28.52, -25, -28.52, -32, -28.52] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex-none rotate-[-28.52deg]">
          <WormYellow />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ContentText() {
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[16px] items-center leading-[0] not-italic relative shrink-0 text-center text-white w-full md:gap-[24px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex flex-col font-['Daxline_Pro:Bold',sans-serif] justify-center relative shrink-0 text-[24px] whitespace-nowrap md:text-[40px]">
        <p>
          <span className="leading-[normal]">
            Uma nova experiência
            <br aria-hidden="true" />
          </span>
          <span className="font-['Daxline_Pro:Extrabold',sans-serif] leading-[normal] not-italic text-[#fff600]">está chegando!</span>
        </p>
      </div>
      <div className="flex flex-col font-['Daxline_Pro:Regular',sans-serif] justify-center min-w-full relative shrink-0 text-[16px] w-[min-content] md:text-[18px] md:max-w-[600px]">
        <p className="leading-[normal] mb-0">Estamos em manutenção para trazer melhorias importantes na plataforma.</p>
        <p className="leading-[normal]">Em breve, você terá uma experiência mais rápida, segura e completa.</p>
      </div>
    </motion.div>
  );
}

function Button() {
  return (
    <motion.a
      href="https://www.lottoland.com.br/noticias/tudo-sobre-a-lottoland/lottoland-loterias-esta-de-cara-nova/"
      className="bg-[#20f15f] content-stretch flex items-center justify-center px-[15px] py-[10px] relative rounded-[500px] shrink-0 md:px-[32px] md:py-[14px] cursor-pointer no-underline"
      data-name="Button"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(32, 241, 95, 0.6)" }}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border border-[#4eff83] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <div className="flex flex-col font-['Daxline_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#010d50] text-[16px] text-center whitespace-nowrap md:text-[18px]">
        <p className="leading-[14.4px] md:leading-[16px]">Saiba mais</p>
      </div>
    </motion.a>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full md:gap-[32px]">
      <ContentText />
      <Button />
    </div>
  );
}

function Footer() {
  return (
    <motion.div
      className="bg-[#000b30] content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-[24px] w-full md:py-[32px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="flex flex-col font-['Daxline_Pro:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-center text-white max-w-[328px] md:text-[10px] md:max-w-[800px]">
        <p className="leading-[normal]">A Lottoland não possui qualquer vínculo com a Caixa Econômica Federal e é uma empresa independente que realiza intermediação de apostas. Todos os produtos lotéricos solicitados na plataforma serão obrigatoriamente processados nas Casas Lotéricas Oficiais da Caixa Econômica Federal. Lottoland Serviços de Intermediacao LTDA., CNPJ: 57.628.148/0001-92, com sede no município de Osasco, estado de São Paulo, Av. dos Autonomistas, nº 900, conj. 512, sala 512Z, Vila Yara, CEP: 06020-012.</p>
      </div>
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <div className="h-[39.135px] relative shrink-0 w-[80px] md:h-[58px] md:w-[120px]" data-name="image 4">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
        </div>
        <a
          href="https://www.reclameaqui.com.br/empresa/lottoland/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[34.333px] relative rounded-bl-[5.333px] rounded-br-[5.333px] rounded-tl-[10.667px] rounded-tr-[5.333px] shrink-0 w-[100px] md:h-[51px] md:w-[150px] cursor-pointer hover:opacity-80 transition-opacity"
          data-name="image 6"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[5.333px] rounded-br-[5.333px] rounded-tl-[10.667px] rounded-tr-[5.333px]">
            <img alt="Empresa verificada por Reclame Aqui" className="absolute h-[142.72%] left-0 max-w-none top-[-42.72%] w-full" src={imgImage6} />
          </div>
        </a>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="bg-[#010d50] min-h-screen flex flex-col" data-name="Lottoland-Maintenance">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col items-center px-[16px] pt-[40px] pb-[24px]">
          <div className="content-stretch flex flex-col gap-[60px] items-center w-full max-w-[328px]">
            <LogoLottolandMobile />
            <div className="content-stretch flex flex-col gap-[24px] items-center w-full">
              <IllustrationFrameMobile />
              <MainContent />
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center px-[32px] py-[60px]">
          <div className="w-full max-w-[1200px] flex flex-col gap-[48px] items-center">
            <LogoLottolandDesktop />
            <div className="flex items-center justify-center gap-[80px] w-full">
              <IllustrationFrameDesktop />
              <div className="flex-1 max-w-[500px]">
                <MainContent />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
