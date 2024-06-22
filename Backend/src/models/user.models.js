import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    
    phonenumber: {
        type: String,
        required: true,
        unique: true
    },
    DOB: {
        type: Date
    },
    avatar: {
        type: String,
        required: true
    },
    Address: {
        type: String
    },
    Language: {
      type: String,
    },
    HomeWorkDistance:{
        type: String
    },
    PrivateCarPlate: {
        type: String
    },
    MaritalStatus: {
        type: String,
        
    },
    NumberofDependentChildren: {
        type: String
    },
    CertificateLevel: {
        type: String
    },
    FieldofStudy: {
        type: String
    },
    School:{
        type: String
    },
    ContactName:{
        type: String
    },
    Nationality:{
        type: String
    },
    IdentificationNo:{
        type: String
    },
    PassportNo:{
        type: String
    },
    Gender: {
        type: String,
    },
    PlaceOfBirth:{
        type: String
    },
    CountryOfBirth:{
        type: String
    },
    NonResident:{
        type: String
    },
    VisaNo:{
        type: String
    },
    WorkPermitNo:{
        type: String
    },
    VisaExpireDate:{
        type: String
    },
    WorkPermitExpirationDate:{
        type: String
    },
    WorkPermit:{
        type: String
    },
    EmployeeType:{
        type: String
    },
    RelatedUser:{
        type: String
    },
    PinCode:{
        type: String
    },
    BadgeID:{
        type: String
    },
    JobPosition:{
        type: String
    },
    RegistrationNumberOfTheEmployee:{
        type: String
    },
    HourlyCost:{
        type: String
    },
    FleetMobilityCard:{
        type: String
    }, 
    WorkAddress:{
        type: String
    },
    WorkLocation:{
        type: String
    },
    Expense:{
        type: String
    },
    TimeOff:{
        type: String
    },
    WorkingHours:{
        type: String
    },
    Timezone:{
        type: String
    },
    Roles:{
        type: String
    },
    DefaultRole:{
        type: String
    },
    WorkMobile:{
        type: String
    },
    WorkPhone:{
        type: String
    },
    WorkEmail:{
        type: String
    },
    Department:{
        type: String
    },
    Manager:{
        type: String
    },
    Coach:{
        type: String
    }



     
}, { timestamps: true });


// Hash the password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        return next(error);
    }
});

// Compare the password with the stored hash
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Generate access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email,
        role: this.role
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

// Generate refresh token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

export const User = mongoose.model("User", userSchema);
