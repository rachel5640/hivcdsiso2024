import { useRef } from 'react';
import { forwardRef } from 'react';
import ViewAdrenalinOne from '../assets/view_adrenalin_1.jpg';
import ViewAdrenalinTwo from '../assets/view_adrenalin_2.jpg';
import ViewDromapicOne from '../assets/view_dromapic_1.jpg';
import ViewDromapicTwo from '../assets/view_dromapic_2.jpg';
import ViewGreenbeeOne from '../assets/view_greenbee_1.jpg';
import ViewGreenbeeTwo from '../assets/view_greenbee_2.jpg';
import ViewHangulggolOne from '../assets/view_hangulggol_1.jpg';
import ViewHangulggolTwo from '../assets/view_hangulggol_2.jpg';
import ViewHipsOne from '../assets/view_hips_1.jpg';
import ViewHipsTwo from '../assets/view_hips_2.jpg';
import ViewProtoOne from '../assets/view_proto_1.jpg';
import ViewProtoTwo from '../assets/view_proto_2.jpg';
import ViewHyphenOne from '../assets/view_hyphen_1.jpg';
import ViewHyphenTwo from '../assets/view_hyphen_2.jpg';
import ViewIrayOne from '../assets/view_iray_1.jpg';
import ViewIrayTwo from '../assets/view_iray_2.jpg';
import ViewYadzOne from '../assets/view_yadz_1.jpg';
import ViewYadzTwo from '../assets/view_yadz_2.jpg';

const ImageSection = forwardRef<HTMLDivElement>((_props, ref) => {
  const innerRef = ref || useRef(null);
  return (
    <div ref={innerRef}>
      <img src={ViewGreenbeeOne} alt="Greenbee View" />
      <img src={ViewGreenbeeTwo} alt="Greenbee View" />
      <img src={ViewDromapicOne} alt="Dromapic View" />
      <img src={ViewDromapicTwo} alt="Dromapic View" />
      <img src={ViewIrayOne} alt="Iray View" />
      <img src={ViewIrayTwo} alt="Iray View" />
      <img src={ViewYadzOne} alt="Yadz View" />
      <img src={ViewYadzTwo} alt="Yadz View" />
      <img src={ViewAdrenalinOne} alt="Adrenalin View" />
      <img src={ViewAdrenalinTwo} alt="Adrenalin View" />
      <img src={ViewProtoOne} alt="Proto View" />
      <img src={ViewProtoTwo} alt="Proto View" />
      <img src={ViewHyphenOne} alt="Hyphen View" />
      <img src={ViewHyphenTwo} alt="Hyphen View" />
      <img src={ViewHangulggolOne} alt="Hangulggol View" />
      <img src={ViewHangulggolTwo} alt="Hangulggol View" />
      <img src={ViewHipsOne} alt="Hips View" />
      <img src={ViewHipsTwo} alt="Hips View" />
    </div>
  );
});

export default ImageSection;
