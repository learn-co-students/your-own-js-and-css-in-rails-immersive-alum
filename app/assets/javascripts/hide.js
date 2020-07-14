function hideWhenClicked(event) {
  // debugger
  $(event.target).hide();
}

$("#hide_this").click(hideWhenClicked)
