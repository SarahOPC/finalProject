import styled from "styled-components";

const FormContainer = styled.form`
    font-size: 1.3em;
    width: 33em;
    height: 33em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #444444;
`;

const StyledLabel = styled.label`
    display: block;
    margin-top: 0.5em;
`;

const StyledInput = styled.input`
    font-family: Verdana;
    margin-bottom: 0.3em;
    border: none;
    border-bottom: 0.1em solid transparent;
    transition: border-bottom 0.3s ease;

    &:hover {
        border-bottom: 0.1em solid #999999;
    }
`;

const StyledSelect = styled.select`
    margin-bottom: 0.3em;
    border: none;
    border-bottom: 0.1em solid transparent;
    transition: border-bottom 0.3s ease;

    &:hover {
        border-bottom: 0.1em solid #999999;
    }
`;

const IdentityAndAddress = styled.div`
    margin-top: 1em;
    text-align: center;
`;

function FormComponent() {
    
    const regexPatterns = {
        nameAndCity: /^[a-zA-ZÀ-ÿ -]+$/, // Expression régulière corrigée
        street: /\d{1,}\s\w{1,}\s?\w{1,}/,
        zipCode: /(^\d{5}$)|(^\d{5}-\d{4}$)/, // US ZIP codes in the format 12345 or 12345-6789
        // no regex added for date due to the datepicker of html tag
    };
    
    const handleInputChange = (e, pattern) => {
        const {value} = e.target;
        e.target.style.borderColor = pattern.test(value) ? 'transparent' : 'red';
    };

    return(
        <FormContainer>
            <IdentityAndAddress>Identity</IdentityAndAddress>
            <StyledLabel htmlFor="firstName">First Name</StyledLabel>
            <StyledInput type="text" id="firstName" name="firstName" onChange={(e) => handleInputChange(e, regexPatterns.nameAndCity)} required/>
            <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
            <StyledInput type="text" id="lastName" name="lastName" onChange={(e) => handleInputChange(e, regexPatterns.nameAndCity)} required/>
            <StyledLabel htmlFor="dob">Date of Birth</StyledLabel>
            <StyledInput type="date" id="dob" name="dob" required/>
            <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
            <StyledInput type="date" id="startDate" name="startDate" required/>
            <StyledLabel htmlFor="department">Department</StyledLabel>
            <StyledSelect id="department" name="department" required>
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="engineering">Engineering</option>
                <option value="humanresources">Human Resources</option>
                <option value="legal">Legal</option>
            </StyledSelect>
            <IdentityAndAddress>Address</IdentityAndAddress>
            <StyledLabel htmlFor="street">Street</StyledLabel>
            <StyledInput type="text" id="street" name="street" onChange={(e) => handleInputChange(e, regexPatterns.street)} required/>
            <StyledLabel htmlFor="city">City</StyledLabel>
            <StyledInput type="text" id="city" name="city" onChange={(e) => handleInputChange(e, regexPatterns.nameAndCity)} required/>
            <StyledLabel htmlFor="state">State</StyledLabel>
            <StyledSelect id="state" name="state" required>
                <option value="alabama">Alabama</option>
                <option value="alaska">Alaska</option>
                <option value="americansamoa">American Samoa</option>
                <option value="arizona">Arizona</option>
                <option value="arkansas">Arkansas</option>
                <option value="california">California</option>
                <option value="colorado">Colorado</option>
                <option value="connecticut">Connecticut</option>
                <option value="delaware">Delaware</option>
                <option value="districtofcolumbia">District Of Columbia</option>
                <option value="federatedstatesofmicronesia">Federated States Of Micronesia</option>
                <option value="florida">Florida</option>
                <option value="georgia">Georgia</option>
                <option value="guam">Guam</option>
                <option value="hawaii">Hawaii</option>
                <option value="idaho">Idaho</option>
                <option value="illinois">Illinois</option>
                <option value="indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="kansas">kansas</option>
                <option value="kentucky">Kentucky</option>
                <option value="louisiana">Louisiana</option>
                <option value="maine">Maine</option>
                <option value="marshallislands">Marshall Islands</option>
                <option value="maryland">Maryland</option>
                <option value="massachusetts">Massachusetts</option>
                <option value="michigan">Michigan</option>
                <option value="minnesota">Minnesota</option>
                <option value="mississippi">Mississippi</option>
                <option value="missouri">Missouri</option>
                <option value="montana">Montana</option>
                <option value="nebraska">Nebraska</option>
                <option value="nevada">Nevada</option>
                <option value="newhampshire">New Hampshire</option>
                <option value="newjersey">New Jersey</option>
                <option value="newmexico">New Mexico</option>
                <option value="newyork">New York</option>
                <option value="northcarolina">North Carolina</option>
                <option value="northdakota">North Dakota</option>
                <option value="northernmarianaislands">Northern Mariana Islands</option>
                <option value="ohio">Ohio</option>
                <option value="oklahoma">Oklahoma</option>
                <option value="oregon">Oregon</option>
                <option value="palau">Palau</option>
                <option value="pennsylvania">Pennsylvania</option>
                <option value="puertorico">Puerto Rico</option>
                <option value="rhodeisland">Rhode Island</option>
                <option value="southcarolina">South Carolina</option>
                <option value="southdakota">South Dakota</option>
                <option value="tennessee">Tennessee</option>
                <option value="texas">Texas</option>
                <option value="utah">Utah</option>
                <option value="vermont">Vermont</option>
                <option value="virginislands">Virgin Islands</option>
                <option value="virginia">Virginia</option>
                <option value="washington">Washington</option>
                <option value="westvirginia">West Virginia</option>
                <option value="wisconsin">Wisconsin</option>
                <option value="wyoming">Wyoming</option>
            </StyledSelect>
            <StyledLabel htmlFor="zip">Zip Code</StyledLabel>
            <StyledInput type="text" id="zip" name="zip" onChange={(e) => handleInputChange(e, regexPatterns.zipCode)} required/>
        </FormContainer>
    )
}

export { FormComponent };
