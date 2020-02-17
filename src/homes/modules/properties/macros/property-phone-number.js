Macros.create('propertyPhoneNumber', function () {
    return '2' + (this.property.whatsapp_mobile || window.settings.settings['site.phone']).replace(/^(2|002)/, '');
});