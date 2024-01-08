

interface ErrorProps {
  message?: string; // Pesan khusus untuk error 502
}

const Error = ({ message = 'Bad Gateway (502)' }: ErrorProps) => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <img 
        src="https://assets.tokopedia.net/asts/il-error-server-error-new.svg" 
        alt="Server Error Illustration" 
        className="mb-4" 
      />
      <h1 className="text-xl font-bold mb-2">{message}</h1>
      <p className="text-gray-600">Maaf, sepertinya ada masalah dengan server kami. Coba lagi nanti.</p>
    </div>
  );
};

export default Error;
