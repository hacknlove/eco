import { useCallback } from "react";
import { useRouter } from "next/router";

export default function useSubmit (path = '/gracias') {
  const router = useRouter();
  return useCallback(async function submit(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    const response = await fetch('/api/candidate', {
      method: 'POST',
      body: data,
    });

    if (response.status === 200) {
      return router.push(path)
    }

    alert('Algo salió mal, inténtalo de nuevo en unos minutos');
  }, [ok, err, router]);
}