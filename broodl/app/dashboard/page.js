
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
    title: "Broodl ⋅ Dashboard",
  };


export default function DashboardPage() {

    const isAuthenticated = false

    const children = (
        <Login/>
    )
    return (
        <Main>
          {children}  
        </Main>
    )
}