import * as React from 'react';
import Collapse from '.';

const getFooterContent = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-evenly',
    }}
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
);

export default () => (
  <>
    <Collapse
      title="Collapse with footer and subtitle"
      isExpanded={false}
      footer={getFooterContent()}
      subTitle="this is the subtitle"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </Collapse>
    <br />
    <br />
    <Collapse title="Expanded state without footer" subTitle="this is the subtitle" isExpanded={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </Collapse>
    <br />
    <br />
    <Collapse
      title="Collapse with onclick handler"
      footer={getFooterContent()}
      onClick={(isOpen: boolean) => alert(`isExpanded:${isOpen}`)}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </Collapse>
    <br />
    <br />
    <Collapse title="Collapse with headerSize='md'" headerSize="md" isExpanded={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </Collapse>
  </>
);
