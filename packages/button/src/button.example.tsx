import * as React from 'react';
import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { p } from '@lendi-ui/spacing';
import { Button } from '@lendi-ui/button';
import { Lock } from '@lendi-ui/icon';

const Background = styled.div`
  ${p('lg')} ${bg('secondary.500')};
`;

const icon = <Lock color="shade.0" />;

export default () => (
  <>
    <Button variant="primary">I want to buy a home</Button> <Button variant="secondary">I want to buy a home</Button>{' '}
    <Button variant="emphasis">I want to buy a home</Button> <Button variant="empty">I want to buy a home</Button>{' '}
    <br />
    <br />
    <hr />
    <br />
    <br />
    <Button variant="primary" size="xs">
      I want to buy a home
    </Button>{' '}
    <Button variant="primary" size="sm">
      I want to buy a home
    </Button>{' '}
    <Button variant="primary" size="md">
      I want to buy a home
    </Button>{' '}
    <Button variant="primary" size="lg">
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="primary" size="xs" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="primary" size="sm" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="primary" size="md" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="primary" size="lg" isDisabled>
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="secondary" size="xs">
      I want to buy a home
    </Button>{' '}
    <Button variant="secondary" size="sm">
      I want to buy a home
    </Button>{' '}
    <Button variant="secondary" size="md">
      I want to buy a home
    </Button>{' '}
    <Button variant="secondary" size="lg">
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="secondary" size="xs" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="secondary" size="sm" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="secondary" size="md" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="secondary" size="lg" isDisabled>
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="emphasis" size="xs">
      I want to buy a home
    </Button>{' '}
    <Button variant="emphasis" size="sm">
      I want to buy a home
    </Button>{' '}
    <Button variant="emphasis" size="md">
      I want to buy a home
    </Button>{' '}
    <Button variant="emphasis" size="lg">
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="emphasis" size="xs" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="emphasis" size="sm" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="emphasis" size="md" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="emphasis" size="lg" isDisabled>
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="empty" size="xs">
      I want to buy a home
    </Button>{' '}
    <Button variant="empty" size="sm">
      I want to buy a home
    </Button>{' '}
    <Button variant="empty" size="md">
      I want to buy a home
    </Button>{' '}
    <Button variant="empty" size="lg">
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="empty" size="xs" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="empty" size="sm" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="empty" size="md" isDisabled>
      I want to buy a home
    </Button>{' '}
    <Button variant="empty" size="lg" isDisabled>
      I want to buy a home
    </Button>
    <br />
    <br />
    <hr />
    <Background>
      <Button variant="primary" size="xs" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="primary" size="sm" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="primary" size="md" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="primary" size="lg" isInverse>
        I want to buy a home
      </Button>
      <br />
      <br />
      <Button variant="primary" size="xs" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="primary" size="sm" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="primary" size="md" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="primary" size="lg" isInverse isDisabled>
        I want to buy a home
      </Button>
      <br />
      <br />
      <Button variant="secondary" size="xs" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="secondary" size="sm" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="secondary" size="md" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="secondary" size="lg" isInverse>
        I want to buy a home
      </Button>
      <br />
      <br />
      <Button variant="secondary" size="xs" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="secondary" size="sm" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="secondary" size="md" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="secondary" size="lg" isInverse isDisabled>
        I want to buy a home
      </Button>
      <br />
      <br />
      <Button variant="emphasis" size="xs" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="emphasis" size="sm" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="emphasis" size="md" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="emphasis" size="lg" isInverse>
        I want to buy a home
      </Button>
      <br />
      <br />
      <Button variant="emphasis" size="xs" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="emphasis" size="sm" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="emphasis" size="md" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="emphasis" size="lg" isInverse isDisabled>
        I want to buy a home
      </Button>
      <br />
      <br />
      <Button variant="empty" size="xs" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="empty" size="sm" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="empty" size="md" isInverse>
        I want to buy a home
      </Button>{' '}
      <Button variant="empty" size="lg" isInverse>
        I want to buy a home
      </Button>
      <br />
      <br />
      <Button variant="empty" size="xs" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="empty" size="sm" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="empty" size="md" isInverse isDisabled>
        I want to buy a home
      </Button>{' '}
      <Button variant="empty" size="lg" isInverse isDisabled>
        I want to buy a home
      </Button>
    </Background>
    <hr />
    <Button variant="primary">I want to buy a home</Button>
    <br />
    <br />
    <Button variant="primary" before={icon}>
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="primary" after={icon}>
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="primary" before={icon} after="💵">
      I want to buy a home
    </Button>
    <hr />
    <Button variant="primary" isFullWidth>
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="primary" before={icon} isFullWidth>
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="primary" after={icon} isFullWidth>
      I want to buy a home
    </Button>
    <br />
    <br />
    <Button variant="primary" before={icon} after="💵" isFullWidth>
      I want to buy a home
    </Button>
  </>
);
