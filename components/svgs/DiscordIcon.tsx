import React, { FC } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { SxProps } from '@mui/material';

const DiscordIcon: FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <SvgIcon sx={sx}>
      <path d="M20.3176 4.36056C18.7614 3.64636 17.1192 3.13662 15.4321 2.84406C15.4168 2.84149 15.4011 2.84371 15.3872 2.85042C15.3732 2.85714 15.3617 2.86802 15.3541 2.88156C15.1426 3.25656 14.9086 3.74706 14.7451 4.13106C12.9265 3.85507 11.0767 3.85507 9.25813 4.13106C9.07575 3.70329 8.86942 3.28613 8.64013 2.88156C8.63244 2.86816 8.62087 2.85741 8.60694 2.85072C8.59302 2.84403 8.5774 2.8417 8.56213 2.84406C6.87463 3.13506 5.23213 3.64506 3.67663 4.36056C3.66332 4.36564 3.65219 4.37518 3.64513 4.38756C0.534131 9.03606 -0.319369 13.5706 0.0991313 18.0481C0.100631 18.0691 0.114131 18.0901 0.130631 18.1036C1.94222 19.4455 3.96852 20.47 6.12313 21.1336C6.13834 21.1384 6.15469 21.1382 6.1698 21.1331C6.1849 21.1279 6.19798 21.1181 6.20713 21.1051C6.66913 20.4751 7.08013 19.8106 7.43413 19.1116C7.44151 19.0972 7.44404 19.0808 7.44133 19.0648C7.43863 19.0489 7.43084 19.0342 7.41913 19.0231C7.41138 19.0157 7.40218 19.0101 7.39213 19.0066C6.74587 18.7582 6.11997 18.4598 5.52013 18.1141C5.50338 18.1046 5.49092 18.089 5.48533 18.0706C5.47975 18.0521 5.48147 18.0323 5.49013 18.0151C5.49524 18.0039 5.50295 17.9941 5.51263 17.9866C5.63863 17.8921 5.76463 17.7931 5.88463 17.6941C5.89523 17.6855 5.90795 17.6801 5.92143 17.6782C5.9349 17.6764 5.94863 17.6782 5.96113 17.6836C9.88963 19.4776 14.1421 19.4776 18.0226 17.6836C18.0356 17.6779 18.0498 17.676 18.0638 17.6778C18.0778 17.6797 18.0911 17.6853 18.1021 17.6941C18.2221 17.7931 18.3481 17.8921 18.4741 17.9866C18.4843 17.994 18.4925 18.0039 18.498 18.0153C18.5035 18.0267 18.506 18.0393 18.5054 18.0519C18.5048 18.0646 18.5011 18.0768 18.4946 18.0877C18.4881 18.0985 18.479 18.1076 18.4681 18.1141C17.8697 18.4629 17.243 18.761 16.5946 19.0051C16.5843 19.0088 16.5749 19.0148 16.5671 19.0225C16.5593 19.0303 16.5534 19.0397 16.5496 19.0501C16.5462 19.0601 16.5448 19.0707 16.5455 19.0813C16.5463 19.0918 16.5492 19.1022 16.5541 19.1116C16.9141 19.8091 17.3266 20.4751 17.7796 21.1051C17.7888 21.1181 17.8019 21.1279 17.817 21.1331C17.8321 21.1382 17.8484 21.1384 17.8636 21.1336C20.0218 20.4721 22.0514 19.4474 23.8651 18.1036C23.8742 18.0973 23.8818 18.089 23.8872 18.0794C23.8927 18.0698 23.8959 18.0591 23.8966 18.0481C24.3976 12.8716 23.0581 8.37456 20.3476 4.38906C20.3449 4.38248 20.3408 4.37654 20.3357 4.37163C20.3305 4.36672 20.3243 4.36295 20.3176 4.36056V4.36056ZM8.02063 15.3211C6.83713 15.3211 5.86363 14.2351 5.86363 12.9031C5.86363 11.5696 6.81913 10.4836 8.02063 10.4836C9.23113 10.4836 10.1956 11.5786 10.1776 12.9031C10.1776 14.2351 9.22213 15.3211 8.02063 15.3211ZM15.9946 15.3211C14.8126 15.3211 13.8376 14.2351 13.8376 12.9031C13.8376 11.5696 14.7931 10.4836 15.9946 10.4836C17.2051 10.4836 18.1711 11.5786 18.1516 12.9031C18.1516 14.2351 17.2051 15.3211 15.9946 15.3211Z" />
    </SvgIcon>
  );
};

export default DiscordIcon;