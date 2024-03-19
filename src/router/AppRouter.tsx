import { Navigate, createBrowserRouter } from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import React from "react";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { Spinner } from "../ui/components/Spinner";
import HeroesApp from "../HeroesApp";
import { ErrorPage } from "../ui/pages/ErrorPage";
import { SearchPage } from "../heroes/pages/SearchPage";
import { HeroPage, loaderHero } from "../heroes/pages/HeroPage";



export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <HeroesApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: "/marvel",      
                        element: <MarvelPage />
                    },
                    {
                        path: "/dc",
                        element: <DcPage />
                    },
                    {
                        path: "/search",
                        element: <SearchPage />
                    },
                    {
                        path: "/hero/:id",
                        element: <HeroPage />                      
                    },
                    {
                        path: "**",
                        element: <Navigate to="/" />
                    } 
                ]                
            },
            
        ]
    },
    
]);