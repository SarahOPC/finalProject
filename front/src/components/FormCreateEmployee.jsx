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
            <StyledLabel htmlFor="usState">State</StyledLabel>
            <StyledSelect id="usState" name="usState" required>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AS">American Samoa</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FM">Federated States Of Micronesia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="GU">Guam</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MH">Marshall Islands</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PW">Palau</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VI">Virgin Islands</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </StyledSelect>
            <StyledLabel htmlFor="zip">Zip Code</StyledLabel>
            <StyledInput type="text" id="zip" name="zip" onChange={(e) => handleInputChange(e, regexPatterns.zipCode)} required/>
        </FormContainer>
    )
}

export { FormComponent };
