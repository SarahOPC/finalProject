import styled from "styled-components";

const FormContainer = styled.form`
    font-size: 1.3em;
    width: 50em;
    height: 19em;
    display: flex;
    justify-content: space-evenly;
    color: #291EF4;
`;

const LeftDiv = styled.div`
    border: 0.1em solid #291EF4;
    border-radius: 0.7em;
    padding: 1em;
`;

const RightDiv = styled.div`
    border: 0.1em solid #291EF4;
    border-radius: 0.7em;
    padding: 1em;
`;

const StyledLabel = styled.label`
    display: block;
    margin-top: 0.5em;
`;

const StyledInput = styled.input`
    border-radius: 0.4em;
    margin-bottom: 0.3em;
`;

const StyledSelect = styled.select`
    border-radius: 0.4em;
    margin-bottom: 0.3em;
`;

const Address = styled.div`
    text-align: center;
`;

function FormComponent() {
    return(
        <FormContainer>
            <LeftDiv>
                <StyledLabel htmlFor="firstname">First Name</StyledLabel>
                <StyledInput type="text" id="firstname" name="firstname"/>
                <StyledLabel htmlFor="lastname">Last Name</StyledLabel>
                <StyledInput type="text" id="lastname" name="lastname"/>
                <StyledLabel htmlFor="dateofbirth">Date of Birth</StyledLabel>
                <StyledInput type="date" id="dateofbirth" name="dateofbirth"/>
                <StyledLabel htmlFor="startdate">Start Date</StyledLabel>
                <StyledInput type="date" id="startdate" name="startdate"/>
                <StyledLabel htmlFor="department">Department</StyledLabel>
                <StyledSelect id="department" name="department">
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                    <option value="engineering">Engineering</option>
                    <option value="humanresources">Human Resources</option>
                    <option value="legal">Legal</option>
                </StyledSelect>
            </LeftDiv>
            <RightDiv>
                <Address>Address</Address>
                <StyledLabel htmlFor="street">Street</StyledLabel>
                <StyledInput type="text" id="street" name="street"/>
                <StyledLabel htmlFor="city">City</StyledLabel>
                <StyledInput type="text" id="city" name="city"/>
                <StyledLabel htmlFor="state">State</StyledLabel>
                <StyledSelect id="state" name="state">
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
                <StyledLabel htmlFor="zipcode">Zip Code</StyledLabel>
                <StyledInput type="text" id="zipcode" name="zipcode"/>
            </RightDiv>
        </FormContainer>
    )
}

export { FormComponent };
