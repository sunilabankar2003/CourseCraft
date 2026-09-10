import { GraduationCap, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "@/features/api/authApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful.");
      navigate("/");
    }

    if (loginError) {
      toast.error(loginError?.data?.message || "Login failed.");
    }

    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup successful.");
    }

    if (registerError) {
      toast.error(registerError?.data?.message || "Signup failed.");
    }
  }, [
    loginIsSuccess,
    loginData,
    loginError,
    registerIsSuccess,
    registerData,
    registerError,
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 p-4 mt-5">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center space-y-3">
          <div className="flex justify-center">
            <GraduationCap className="h-12 w-12 text-blue-600" />
          </div>

          <CardTitle className="text-3xl font-bold">LMS Portal</CardTitle>

          <CardDescription>Learn. Build. Grow.</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>

              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* LOGIN */}

            <TabsContent value="login">
              <CardDescription className="mb-5">
                Login to your account
              </CardDescription>

              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail">Email</Label>

                  <Input
                    id="loginEmail"
                    type="email"
                    name="email"
                    value={loginInput.email}
                    placeholder="Enter your email"
                    required
                    onChange={(e) => changeInputHandler(e, "login")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loginPassword">Password</Label>

                  <Input
                    id="loginPassword"
                    type="password"
                    name="password"
                    value={loginInput.password}
                    placeholder="Enter your password"
                    required
                    onChange={(e) => changeInputHandler(e, "login")}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                <Button
                  type="submit"
                  disabled={loginIsLoading}
                  className="w-full"
                  onClick={() => {
                    handleRegistration("login");
                  }}
                >
                  {loginIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      wait
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* SIGNUP */}

            <TabsContent value="signup">
              <CardDescription className="mb-5">
                Create a new account
              </CardDescription>

              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>

                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={signupInput.name}
                    placeholder="Enter your full name"
                    required
                    onChange={(e) => changeInputHandler(e, "signup")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signupEmail">Email</Label>

                  <Input
                    id="signupEmail"
                    type="email"
                    name="email"
                    value={signupInput.email}
                    placeholder="Enter your email"
                    required
                    onChange={(e) => changeInputHandler(e, "signup")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signupPassword">Password</Label>

                  <Input
                    id="signupPassword"
                    type="password"
                    name="password"
                    value={signupInput.password}
                    placeholder="Create password"
                    required
                    onChange={(e) => changeInputHandler(e, "signup")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={registerIsLoading}
                  className="w-full"
                  onClick={() => {
                    handleRegistration("signup");
                  }}
                >
                  {registerIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
