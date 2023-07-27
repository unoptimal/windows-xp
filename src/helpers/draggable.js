function makeDraggable(element, updatePositionCallback, nonDraggableSelector ) {
  function dragStart(e) {
    if (nonDraggableSelector && e.target.closest(nonDraggableSelector)) {
      return;  
    }
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    function dragMove(e) {

      updatePositionCallback(e.clientX - x + "px", e.clientY - y + "px");
    }

    function dragEnd() {
      window.removeEventListener("mousemove", dragMove);
      window.removeEventListener("mouseup", dragEnd);
    }

    window.addEventListener("mousemove", dragMove);
    window.addEventListener("mouseup", dragEnd);
  }

  element.addEventListener("mousedown", dragStart);

  return {
    destroy() {
      element.removeEventListener("mousedown", dragStart);
    },
  };
}

export { makeDraggable };
