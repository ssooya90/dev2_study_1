public class Ramda3 {

	//함수형 인터페이스 체크 어노테이션
	@FunctionalInterface
	public interface MyNumber{
		int getMax(int num1, int num2);
	}

	public static void main(String[] args) {
		MyNumber max = (x,y)->(x>=y)? x:y;
		System.out.println(max.getMax(10, 30));
	}


}
