"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

const Success = () => {
  return (
    <section className="bg-white flex items-center justify-center h-96">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <p className="text-sm text-green-500 font-semibold mb-2">Sucesso!</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Sua mensagem foi <br /> enviada.
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Obrigado por entrar em contato com a Newurb. Em breve retornaremos com
          mais informações.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <Button type="button" variant={"btn_dark_green"} title="Voltar" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Success;
