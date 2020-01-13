import { Component, h, Prop, State } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';
import star from './star.svg';
import starSelected from './star-selected.svg';

@Component({
  tag: 't-rating',
  styleUrl: 'rating.css',
  shadow: true,
})
export class Rating {
  @Prop() public type?: string;
  @Prop() public star?: any = star;
  @Prop() public starSelected?: any = starSelected;

  @State() private range = [1, 2, 3, 4, 5];
  @State() private selectedValue = null;
  @State() private preSelectValue = 0;
  @State() private selected = false;

  public handleMouseEnter = val => {
    this.preSelectValue = val;
  };

  public handleMouseLeave = () => {
    if (this.selectedValue) {
      this.preSelectValue = this.selectedValue;
    } else {
      this.preSelectValue = 0;
    }
  };

  public handleClick = val => {
    if (this.selectedValue !== val) {
      this.selectedValue = val;
      this.preSelectValue = val;
    } else {
      this.selectedValue = null;
      this.preSelectValue = 0;
    }
  };

  public render() {
    return (
      <div class="rating__container">
        {this.range.map(val => {
          this.selected = val <= this.preSelectValue;
          return (
            <div
              innerHTML={
                this.type === 'star'
                  ? this.selected
                    ? starSelected
                    : star
                  : ''
              }
              class={this.getCssClassMap()}
              onMouseEnter={() => this.handleMouseEnter(val)}
              onMouseLeave={() => this.handleMouseLeave()}
              onClick={() => this.handleClick(val)}
            />
          );
        })}
      </div>
    );
  }

  private getCssClassMap(): CssClassMap {
    return classNames(
      `rating__item--${this.type}`,
      this.selected &&
        `rating__item--${this.type}-selected-${this.preSelectValue}`
    );
  }
}