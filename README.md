# string-to-array

FUNCTION stringToArray parameter STRING
  SET RESULT ke []
  SET WORD sama dengan potong STRING dengan ','
  LOOP index i = 0, index i kurang dari panjang WORD, increment satu
    SET ROW ke []
    LOOP index j = 0, index j kurang dari panjang WORD index i, increment satu
      PUSH WORD index i j ke ROW
    END LOOP
    PUSH ROW ke RESULT
  END LOOP
  RETURN RESULT
END FUNCTION


//function splitString
FUNCTION splitString parameter string
  SET TEMPSTR ke ''
  SET RESULT ke []
  LOOP index i = 0, index i kurang dari panjang STRING, increment satu
    IF STRING index i sama dengan ','
      PUSH TEMPSTR ke RESULT
      ASSIGN TEMPSTR ke ''
    END IF
    ELSE
      TEMPSTR sama dengan TEMPSTR ditambah STRING index i
    END ELSE
  END LOOP
  PUSH TEMPSTR ke RESULT
  RETURN RESULT
END FUNCTION
