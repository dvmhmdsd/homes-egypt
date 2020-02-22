Macros.create('propertyPhoneNumber', function () {
    return '2' + (this.property.region_whatsapp_mobile || this.property.whatsapp_mobile || window.settings.settings['site.phone']).replace(/^(2|002)/, '');
});

function whatsappMessage(property) {
    return `whatsapp://send?phone=${property.phoneNumber}&text=` + [
        'I would like to get more information about this property',
        `https://homes-egypt/property/${property.old_id}`,
        `Property Id: ${property.old_id}`,
        `Property Type: ${property.type}`,
        `Price: ${currencyConverter(property.prices ? property.prices[0] : property)}`,
    ].join("%0a%0a"); 
}