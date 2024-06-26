import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"signup"} />
      <BreadCrumb title="signup" />
      <Container class1="login-wrapper py-5 home-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">SignUp</h3>
              <form action="" className="d-flex flex-column gap-15">
              <CustomInput type="text" name="Name"  placeholder="Name"/>
              <CustomInput type="email" name="email" placeholder="Email"/>
              <CustomInput type="Password" name="Password" placeholder="Password"/>
              <CustomInput type="tel" name="mobile" placeholder="Mobile Number"/>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">SignUp</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;