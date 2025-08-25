import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import RegisterForm from "@/components/authComponents/RegisterForm";
const Register = () => {
  return (
   <div className="w-full min-h-[100vh] container mx-auto py-2 px-2 flex justify-center items-center">
      <Card className="w-full max-w-[35rem]">
        <CardHeader>
          <CardTitle>Nombra Register</CardTitle>
        </CardHeader>

        <CardContent>
          <RegisterForm  />
        </CardContent>
      </Card>
    </div>
  )
}

export default Register;
