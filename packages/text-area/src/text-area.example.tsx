import * as React from 'react';
import TextArea from './';

interface ExampleState {
  value?: string;
}

class Example extends React.Component<{}, ExampleState> {
  state = {
    value: '',
  };

  onChange = (e: any): void => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <br />
        <br />
        <TextArea size="sm" value={value} onChange={this.onChange} placeholder="I'm so small 🎉" />
        <br />
        <br />
        <TextArea size="md" value={value} onChange={this.onChange} placeholder="I'm medium 🎉" />
        <br />
        <br />
        <TextArea size="lg" value={value} onChange={this.onChange} placeholder="Look at me, I'm LARGE! 🎉" />
        <br />
        <br />
        <div style={{ background: 'gray', borderRadius: '6px', padding: '15px' }}>
          <TextArea isInverse value={value} onChange={this.onChange} placeholder="Inverse 👌" />
        </div>
        <br />
        <TextArea isDisabled value={value} onChange={this.onChange} placeholder="I'm disabled guys 😪" />
        <br />
        <br />
        <TextArea isError value={value} onChange={this.onChange} placeholder="Uh oh, error mode 😬" />
        <br />
        <br />
        <TextArea
          isFullWidth
          value={value}
          onChange={this.onChange}
          placeholder="I'm really, really long and so very full-width 😳"
        />
        <br />
        <br />
        <TextArea
          id="textareaId"
          name="IAmTextArea"
          aria-label="text-area"
          isFullWidth
          value={value}
          placeholder="Native props 'disabled'"
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Example;
