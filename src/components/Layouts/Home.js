import Button from "../../components/Buttons/Button"
import {authenticationUrl} from "../../config";

const Home = () => {
  const redirectURL = authenticationUrl;
  console.log("redirectURL",redirectURL)
  return (

      <Button
      variant="primary"
      btncontent="text"
      btnText={"Authenticate"}
      btnType="button"
      classes="w-100"
      handleBtnClick={() => {window.location.assign(redirectURL); }}
    />

  );
}

export default Home;
