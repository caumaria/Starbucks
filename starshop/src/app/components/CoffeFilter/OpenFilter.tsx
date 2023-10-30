import Link from 'next/link';
import NespressoImg from '../../../../public/sectionMenu1.png';
import styled from 'styled-components';
import Image from 'next/image';

const OpenFilterContaier = styled.div`
    width: 100%;
    height: 320px;
    background-color: red;
`;

export default function OpenFilter () {
  return (
    <OpenFilterContaier>
        <a>coffe filter 1</a>
        <a>coffe filter 2</a>

        <Link href="/nespresso">
        <span>
        nespresso
        </span>
        <Image src={NespressoImg} alt="Nespresso Icon"></Image>
      </Link>
      <Link href="/nescafe">
        <span>
        nescafe
        </span>
        <Image src={NespressoImg} alt="Nescafe Icon"></Image>
      </Link>
      <Link href="/torrado">
        <span>
        torrado
        </span>
        <Image src={NespressoImg} alt="Torrado Icon"></Image>
      </Link>

    </OpenFilterContaier>
  );
}
