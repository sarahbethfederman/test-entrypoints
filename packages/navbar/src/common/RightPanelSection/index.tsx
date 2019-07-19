import * as React from 'react';
import { PHONE } from '../../constants/contact';
import { RightSidebar } from '../RightSidebar';
import { PickATime, Telephone, LiveChat, Document } from '@lendi-ui/fancy-icon';

export interface RightPanelSectionProps {
  applicationNumber?: number;
  phoneNumber?: string;
  onChat?: () => void;
  params?: string;
  analyticsCallback?: (text: string) => void;
}

const toTel = (phoneNumber: string) => `tel:+61${phoneNumber.replace(/ /g, '')}`;

export const RightPanelSection = (props: RightPanelSectionProps) => {
  const { phoneNumber = PHONE, applicationNumber = 0, onChat = () => {}, params = '' } = props;
  return (
    <RightSidebar.Section>
      <RightSidebar.Item icon={<Telephone />} href={phoneNumber && toTel(phoneNumber)}>
        {phoneNumber}
      </RightSidebar.Item>
      <RightSidebar.Item icon={<LiveChat />} labelText={'chat online'} onClick={() => onChat()}>
        Chat online
      </RightSidebar.Item>
      <RightSidebar.Item icon={<PickATime />} href={`/appointment-booking/${params}`}>
        Book an appointment
      </RightSidebar.Item>
      {applicationNumber > 0 && (
        <RightSidebar.Item
          icon={<Document />}
          href={`/dashboard/applications/application${applicationNumber.toString()}/documents/${params}`}
        >
          Upload your documents
        </RightSidebar.Item>
      )}
    </RightSidebar.Section>
  );
};
