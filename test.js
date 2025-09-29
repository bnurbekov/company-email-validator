
const expect = require('chai').expect;
const validator = require(".");

const validSupported =
[
	"test@utterly.app",
    "test@getutterly.com"
];

const validUnsupported =
[

];

const invalidSupported =
[
    "john.doe@gmail.com",
    "maria.doe@outlook.com"
];
describe('TEST EMAILS AGAINST VALIDATOR', () => {
    describe('.isCompanyEmail', () => {
        it('Should Be Valid', () => {
            validSupported.forEach( email => {
                expect(validator.isCompanyEmail(email)).to.equal(true);
            });
        });

        it('Should Be Invalid', () => {
            invalidSupported.forEach( email => {
                expect(validator.isCompanyEmail(email)).to.equal(false);
            });
        });

        it('Should Be Invalid(UnSupported By Module)', () => {
            validUnsupported.forEach( email => {
                expect(validator.isCompanyEmail(email)).to.equal(false);
            });
        });

        it('Should Handle Case Insensitive Emails', () => {
            expect(validator.isCompanyEmail('TEST@UTTERLY.APP')).to.equal(true);
            expect(validator.isCompanyEmail('Test@Utterly.App')).to.equal(true);
            expect(validator.isCompanyEmail('JOHN.DOE@GMAIL.COM')).to.equal(false);
            expect(validator.isCompanyEmail('John.Doe@Gmail.Com')).to.equal(false);
        });
    });

    describe('.isCompanyDomain', () => {
        it('Should Allow Valid Domains', () => {
            expect(validator.isCompanyDomain('utterly.app')).to.equal(true);
        });

        it('Should Disallow Public Domains', () => {
            expect(validator.isCompanyDomain('gmail.com')).to.equal(false);
        });

        it('Should Handle Case Insensitive Domains', () => {
            expect(validator.isCompanyDomain('GMAIL.COM')).to.equal(false);
            expect(validator.isCompanyDomain('Gmail.Com')).to.equal(false);
            expect(validator.isCompanyDomain('UTTERLY.APP')).to.equal(true);
            expect(validator.isCompanyDomain('Utterly.App')).to.equal(true);
        });
    });
});
