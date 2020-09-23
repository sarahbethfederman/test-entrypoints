import React from 'react';
import LenderLogos, { BankAustralia } from '@lendi-ui/lender-logos';

export default {
  title: 'Lender Logos',
};

export const Story = () => (
  <>
    <LenderLogos lenderId="amp" />
    <br />
    <LenderLogos lenderId="bank_australia" />
    <br />
    <BankAustralia width="91px" height="32px" />
  </>
);
