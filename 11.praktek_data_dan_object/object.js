const securityMethod = {
    certificate_id : '8bad5b06-e386-4cbf-b063-8c769cc74055',
    certificate_provider : 'TRISTAR VOWEX SECURITY',
    certificate_publish_date : '01012025',
    certificate_expiration_date : '01012030',
    sha_256_method_status : true,
    web_security_virus_away : true,
};

// dot notation
console.log(securityMethod.certificate_expiration_date);

// square bracket
console.log(securityMethod['certificate_expiration_date']);

// object destructuring
const { certificate_expiration_date } = securityMethod;
console.log(certificate_expiration_date);

// mengubah nilai di properti object
securityMethod.web_security_virus_away = false;
console.log(securityMethod.web_security_virus_away);

// menghapus properti
delete securityMethod.sha_256_method_status;