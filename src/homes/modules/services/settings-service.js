class SettingsService extends Endpoint.Service {
  /**
   * {@inheritDoc}
   */
  boot() {
    this.setRoute("/settings");
  }
}

DI.register({
  class: SettingsService,
  alias: "settingsService"
});
