class HomePage {
  /**
   * Constructor
   */
  constructor(meta) {
    this.meta = meta;
    this.name = "home";
    this.title = "Homes Egypt";
  }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.meta.setDescription(window.settings.settings['site.description.1'])
            .setImage(assets('images/logo.png'));
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() { }
}
