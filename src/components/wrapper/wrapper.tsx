import {Component, Method, h, Host, State} from '@stencil/core';

@Component({
  tag: 'app-content-wrapper',
  shadow: true,
})
export class AppContentWrapper {

  @State() isOpen: boolean = false;

  @Method()
  async toggle(): Promise<void> {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host>
        <div>Status {this.isOpen ? 'Open' : 'Closed'}</div>
        <slot name="content" />
      </Host>
    );
  }
}
