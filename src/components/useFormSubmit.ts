import { useState } from "react";

export function useFormSubmit() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formElement = e.currentTarget;
    fetch(formElement.action!, {
      method: formElement.method!,
      body: new FormData(formElement),
    }).catch((e) => console.error(e));

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  return { isSubmitted, handleSubmit };
}
