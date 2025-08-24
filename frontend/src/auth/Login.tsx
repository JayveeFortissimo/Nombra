import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LoginForm from "@/components/authComponents/LoginForm";
const Login = () => {
  return (
    <div className="w-full min-h-[100vh] container mx-auto py-2 px-2 flex justify-center items-center">
      <Card className="w-full max-w-[35rem]">
        <CardHeader>
          <CardTitle>Nombra Login</CardTitle>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
