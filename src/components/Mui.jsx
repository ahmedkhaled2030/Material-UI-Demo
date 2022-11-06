import React from "react";

const Mui = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: "calc(50% - 25px)", md: 30 },
      }}
      flex={4}
      p={{ xs: 0, md: 2 }}
      width={400}
      height={280}
      bgcolor={"background.default"}
      color={"text.primary"}
      p={3}
      borderRadius={5}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Typography
        variant="h6"
        color="gray"
        textAlign="center"
        fontWeight={500}
        sx={{ display: { xs: "none", sm: "block" } }}
        mb={2}
      >
        Create post
      </Typography>

      <Avatar
        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        sx={{ width: 30, height: 30, bgcolor: "red" }}
      />
      <Stack direction="row" gap={1} mt={2} mb={3}></Stack>

      <Badge badgeContent={4} color="error">
        <Mail />
      </Badge>

      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />

      <ImageList cols={3} rowHeight={100} gap={5}></ImageList>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      ></List>
    </Box>
  );
};

export default Mui;
