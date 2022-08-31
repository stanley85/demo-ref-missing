import {Component, h, Host} from '@stencil/core';

@Component({
  tag: 'app-main',
  shadow: true,
})
export class AppMain {

  private appContentWrapperRef: HTMLAppContentWrapperElement;

  private methodCallDelegate = async () => {
    await this.appContentWrapperRef.toggle();
  }

  render() {
    return (
      <Host>
        {/* working example */}
        <app-content-wrapper ref={ref => this.appContentWrapperRef = ref}>
          <button class="clickHostWorking" onClick={() => this.methodCallDelegate} slot="content">
            Click Me To Close
          </button>
        </app-content-wrapper>
        {/* not working example */}
        <app-content-wrapper ref={ref => this.appContentWrapperRef = ref}>
          <button class="clickHostNotWorking" onClick={this.methodCallDelegate} slot="content">
            Click Me To Close
          </button>
        </app-content-wrapper>
      </Host>
    );
  }
}
