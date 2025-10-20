import arrowCircle from "../assets/arrow-circle.svg";

const Skills = () => {
  const skills = [
    "Kotlin , Java , RESTful APIs",
    "Coroutines , Kotlin Flows , Rx Java",
    "Compose Multiplatform , Coil , Ktor",
    "C++, JNI / NDK",
    "Koin , Hilt , Dagger",
    "Swift, Swift UI , CoreData",
    "Firebase , MVVM ,UI/UX",
    "Git , Jira , CI/CD",
    "JUnit, Espresso",
    "JetPack",
    "Jetpack Compose",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px 100px",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontFamily: "Michroma, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(32px, 5vw, 50px)",
          color: "#97C10C",
        }}
      >
        My Skills/Expertise
      </span>

      <span
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          color: "white",
          marginTop: "10px",
          maxWidth: "800px",
        }}
      >
        I specialize in building scalable, performant apps using both native and
        cross-platform tools. Here are the core technical skills I bring to the
        table.
      </span>

      <div
        style={{
          marginTop: "50px",
          padding: "15px",
          border: "0.5px solid #FFFFFF80",
          borderRadius: "10px",
          color: "white",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <div
          style={{
            backgroundColor: "#292929",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Michroma, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              color: "white",
            }}
          >
            Tools & Frameworks
          </span>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "40px",
              width: "100%",
            }}
          >
            {skills.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "white",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "500px",
                  boxSizing: "border-box",
                  flex: "1 1 100%", // 100% on small screens
                }}
                className="skill-item"
              >
                <img src={arrowCircle} alt="arrow" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          @media (min-width: 768px) {
            .skill-item {
              flex: 1 1 48%; /* 2 items per row */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
