import { Component, Prop, Element } from "@stencil/core";
import NewsCardStyle from "./newscard.style";
import { FontsAndIcons } from "@snakebel/util";

@Component({
  tag: "news-card",
  //styleUrl: "newscard.scss",
  shadow: false
})
export class NewsCard {
  @Element() divEl: HTMLDivElement;
  @Prop() title: string = "";
  @Prop() text: string = "";
  @Prop() day: string = "";
  @Prop() month: string = "";
  @Prop() year: string = "";
  @Prop() author: string = "";

  cardStyle: any;
  constructor() {
    this.menuClickHandler = this.menuClickHandler.bind(this);
  }

  componentWillLoad() {
    this.cardStyle = new NewsCardStyle();
    let changeStyle: object = {};
    this.cardStyle.setup(changeStyle);
    const fontsAndIcons = new FontsAndIcons();
    fontsAndIcons.append([
      "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700",
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
    ]);
    // this.divEl.className = buttonStyle.getClassName(["root"]);
    /* <div class={this.cardStyle.getClassName(["newsCard"])}>
        <div class={this.cardStyle.getClassName(["newsCardWrapper"])}>
          <div class={this.cardStyle.getClassName(["newsCardDate"])}>
            <span class={this.cardStyle.getClassName(["newsCardDay"])}>12</span>
            <span class={this.cardStyle.getClassName(["newsCardMonth"])}>
              Aug
            </span>
            <span class={this.cardStyle.getClassName(["newsCardYear"])}>
              2016
            </span>
          </div>
          <div class={this.cardStyle.getClassName(["newsCardData"])}>
            <div class={this.cardStyle.getClassName(["newsCardContent"])}>
              <span class={this.cardStyle.getClassName(["newsCardAuthor"])}>
                Jane Doe
              </span>
              <h1 class={this.cardStyle.getClassName(["newsCardTitle"])}>
                <a class={this.cardStyle.getClassName(["newsCardA"])} href="#">
                  Everything You Need to Know About Gold Medals
                </a>
              </h1>
              <p class={this.cardStyle.getClassName(["newsCardText"])}>
                Olympic gold medals contain only about 1.34 percent gold, with
                the rest composed of sterling silver.
              </p>
              <label
                htmlFor="show-menu"
                class={this.cardStyle.getClassName(["newsCardMenuButton"])}
              >
                <span
                  class={this.cardStyle.getClassName([
                    "newsCardMenuButtonSpan"
                  ])}
                />
              </label>
            </div>
            <input type="checkbox" id="show-menu" />
            <ul class={this.cardStyle.getClassName(["newsCardMenuContent"])}>
              <li
                class={this.cardStyle.getClassName(["newsCardMenuContentItem"])}
              >
                <a
                  class={`${this.cardStyle.getClassName([
                    "newsCardA"
                  ])} fa fa-bookmark-o`}
                  href="#"
                />
              </li>
              <li
                class={this.cardStyle.getClassName(["newsCardMenuContentItem"])}
              >
                <a
                  class={`${this.cardStyle.getClassName([
                    "newsCardA"
                  ])} fa fa-heart-o`}
                  href="#"
                >
                  <span>47</span>
                </a>
              </li>
              <li
                class={this.cardStyle.getClassName(["newsCardMenuContentItem"])}
              >
                <a
                  class={`${this.cardStyle.getClassName([
                    "newsCardA"
                  ])} fa fa-comment-o`}
                  href="#"
                >
                  <span>8</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */
  }
  menuClickHandler(el) {
    let transformValue: number;
    if (el.target.checked) {
      transformValue = -60;
    } else {
      transformValue = 0;
    }
    this.cardStyle
      .getRuleName("newsCardMenuContent")
      .prop("transform", `translateY(${transformValue}px)`);
  }
  render() {
    return (
      <div class={this.cardStyle.getClassName(["newsCard"])}>
        <div class={this.cardStyle.getClassName(["newsCardWrapper"])}>
          <div class={this.cardStyle.getClassName(["newsCardDate"])}>
            <span class={this.cardStyle.getClassName(["newsCardDay"])}>{this.day}</span>
            <span class={this.cardStyle.getClassName(["newsCardMonth"])}>
              {this.month}
            </span>
            <span class={this.cardStyle.getClassName(["newsCardYear"])}>
              {this.year}
            </span>
          </div>
          <div class={this.cardStyle.getClassName(["newsCardData"])}>
            <div class={this.cardStyle.getClassName(["newsCardContent"])}>
              <span class={this.cardStyle.getClassName(["newsCardAuthor"])}>
                {this.author}
              </span>
              <h1 class={this.cardStyle.getClassName(["newsCardTitle"])}>
                <a
                  class={this.cardStyle.getClassName(["newsCardAnchor"])}
                  href="#"
                >
                  {this.title}
                </a>
              </h1>
              <p class={this.cardStyle.getClassName(["newsCardText"])}>
                {this.text}
              </p>
              <label
                htmlFor="show-menu"
                class={this.cardStyle.getClassName(["newsCardMenuButton"])}
              >
                <span
                  class={this.cardStyle.getClassName([
                    "newsCardMenuButtonSpan"
                  ])}
                />
              </label>
            </div>
            <input
              type="checkbox"
              id="show-menu"
              onChange={this.menuClickHandler}
              class={this.cardStyle.getClassName(["newsCardCheckBox"])}
            />
            <ul class={this.cardStyle.getClassName(["newsCardMenuContent"])}>
              <li
                class={this.cardStyle.getClassName(["newsCardMenuContentItem"])}
              >
                <a
                  href="#"
                  class={
                    "fa fa-bookmark-o " +
                    this.cardStyle.getClassName([
                      "newsCardMenuContentItemAnchor"
                    ])
                  }
                />
              </li>
              <li
                class={this.cardStyle.getClassName(["newsCardMenuContentItem"])}
              >
                <a
                  href="#"
                  class={
                    "fa fa-heart-o " +
                    this.cardStyle.getClassName([
                      "newsCardMenuContentItemAnchor"
                    ])
                  }
                >
                  <span
                    class={this.cardStyle.getClassName([
                      "newsCardMenuContentItemSpan"
                    ])}
                  >
                    47
                  </span>
                </a>
              </li>
              <li
                class={this.cardStyle.getClassName(["newsCardMenuContentItem"])}
              >
                <a
                  href="#"
                  class={
                    "fa fa-comment-o " +
                    this.cardStyle.getClassName([
                      "newsCardMenuContentItemAnchor"
                    ])
                  }
                >
                  <span
                    class={this.cardStyle.getClassName([
                      "newsCardMenuContentItemSpan"
                    ])}
                  >
                    8
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
