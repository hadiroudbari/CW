export default function App() {
  const textArray = [
    {
      text: "Updated Blogs",
    },
    {
      text: "Blogs Menu",
    },
    {
      text: "Create New Blog",
    },
    {
      text: "Guide",
    },
    {
      text: "Ads in Blog",
    },
    {
      text: "Report Violation",
    },
    {
      text: "About Us",
    },
    {
      text: "News",
    },
  ];
  return (
    <div className="p-5">
      <div className="flex lg:flex-row sm:flex-col flex-col">
        <Welcome />
        <Login />
      </div>
      <SpaceLine />
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-10 gap-2">
        {textArray.map(() => (
          <CakeBox />
        ))}
      </div>
      <ul className="sm:flex sm:flex-wrap hidden gap-2 justify-center mt-10">
        {textArray.map((obj, i) => (
          <Footer text={obj.text} color={i === 2 ? "red" : ""} />
        ))}
      </ul>
    </div>
  );
}

function Welcome() {
  return (
    <div
      className="px-20 pt-16 pb-10 flex flex-col justify-center items-center text-white gap-7  lg:w-3/4 sm:w-full"
      style={{ backgroundColor: "#5b5bff" }}
    >
      <p className="text-sm text-center">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
        publishing industries for previewing layouts and visual mockups.
      </p>
      <button
        className="py-3 px-5 rounded-md font-semibold"
        style={{ backgroundColor: "#0101aa" }}
      >
        Signup and Create new Blog
      </button>
    </div>
  );
}

function Login() {
  return (
    <div className="flex flex-col items-center bg-gray-200 gap-2 lg:w-1/4 sm:w-full text-sm p-5 pb-10">
      <input
        className="bg-white border border-gray-300 text-center rounded-sm w-full h-8"
        placeholder="username"
      />

      <input
        className="bg-white border border-gray-300 text-center rounded-sm w-full h-8"
        placeholder="password"
      />

      <button
        style={{ backgroundColor: "#5b5bff" }}
        className="w-full text-white h-8 rounded-sm font-semibold"
      >
        Login
      </button>

      <a
        style={{ color: "#5b5bff" }}
        className="mt-10 font-semibold"
        href="http://localhost:3000/"
      >
        Forgot Password ?
      </a>
    </div>
  );
}

function SpaceLine() {
  return (
    <div className="relative mt-12">
      <span className="newLine"></span>
      <p className="newLineText py-3 px-6 font-semibold text-lg">
        Updated Blogs
      </p>
    </div>
  );
}

function CakeBox() {
  return (
    <div className="bg-gray-100 p-5 flex flex-col gap-3">
      <a style={{ color: "#5b5bff" }} href="http://localhost:3000/">
        Pumpkin cake
      </a>
      <span className="text-gray-500 text-sm">Hadi-Roudbari.ir</span>
      <p className="text-sm">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
  );
}

function Footer(props) {
  return (
    <li>
      <a
        style={props.color ? { color: "red" } : { color: "#5b5bff" }}
        href="http://localhost:3000/"
      >
        {props.text} <span style={{ color: "#5b5bff" }}>|</span>
      </a>
    </li>
  );
}
