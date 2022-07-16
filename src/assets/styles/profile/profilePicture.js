const styles = {
    profile: {
        width: "100%",
        height: "100%"
    },
    cover: {
        height: "300px"
    },
    followersinfo: {
      marginTop: "5px",
      marginLeft: "10px"
    },
    "@media screen and (max-width: 800px)": {
      cover: {
        height: "300px"
      }
    },
    "@media screen and (max-width: 767px)": {
      hidden: {
        display: "none"
      }
    },
    "@media screen and (max-width: 600px)": {
      cover: {
        height: "200px"
      }
    },
    "@media screen and (max-width: 575px)": {
      followersinfo: {
        width: "100px",
        marginLeft: "-3px"
      }
    },
    "@media screen and (max-width: 436px)": {
      title:{
        display: "none"
      },
      description: {
        display: "none"
      },
      picContainer: {
        position: "absolute",
        width: "90%",
        diaplay: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      },
      followersinfo: { 
        width: "100px", 
        marginLeft: "-5px"
      }
    }
}
export default styles