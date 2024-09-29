"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import axios from "axios";
import { useStore } from "../../Store/Store";
import local from "next/font/local";
import { useRouter } from "next/navigation";

const Page = ({}) => {
  const router = useRouter();
  const url = useStore((state) => state.url);
  const storedata = useStore((state)=> state.details)
  const addDetails = useStore((state)=> state.addDetails)
  const [selected, setSelected] = React.useState("login");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const token = localStorage.getItem("token")
  const handleSignup =()=>{
    axios.post(`${url}/api/auth/signup` , {token : token}).then((result)=>{console.log(result.data); })
  }


  const loginHandle =  async() => {
    axios
      .post(`${url}/api/auth/login`, {
        username: username,
        password: password,
      })
      .then((result) => {
        addDetails(result.data.details) 
        localStorage.setItem("token" , result.data.token)
        alert("Matched");    
        router.push("/webscreens/account")

      });
  };
  return (
    <div className="flex  w-full  items-center justify-center   ">
      <Card className="max-w-full lg:w-2/6 md:w-1/2  max-sm:w-2/3  bg-[#18181B] lg:md:p-8  max-sm:mt-28">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="lg"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
            color="secondary"
          >
            <Tab key="login" title="Login" className="text-gray-600">
              <form className="flex flex-col gap-5 mt-10">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  className=""
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <p className="text-center text-small text-gray-500">
                  Need to create an account?{" "}
                  <Link
                    size="sm"
                    className="text-purple-800 font-bold"
                    onPress={() => setSelected("sign-up")}
                  >
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button
                    fullWidth
                    className=" font-bold text-white bg-gradient-to-br from-purple-500 to-pink-500"
                    onClick={loginHandle}
                  >
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-5 mt-10 ">
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="password"
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link
                    size="sm"
                    className="text-purple-800 font-bold"
                    onPress={() => setSelected("login")}
                  >
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button
                    fullWidth
                    className=" font-bold text-white bg-gradient-to-br from-purple-500 to-pink-500"
                    onClick={handleSignup}
                  >
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      
    </div>
  );
};

export default Page;
