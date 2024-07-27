# SamsungPrep

[rat-in-maze](https://leetcode.com/discuss/interview-question/2073103/rat-in-a-maze-problem)
[similar](https://leetcode.com/problems/unique-paths/description/)
[cpp interview questions](https://www.geeksforgeeks.org/cpp-interview-questions/)


Not seen :
[Min stack](https://leetcode.com/problems/min-stack/description/)


Check conditions in these :
- [Check the if condition](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [Remember](https://leetcode.com/problems/longest-repeating-character-replacement/)
- [sliding window maximum](https://leetcode.com/problems/sliding-window-maximum/description/)
- [isme bhi monotonic stack ](https://leetcode.com/problems/daily-temperatures/description/)
- [monotonic stack](https://leetcode.com/problems/largest-rectangle-in-histogram/description/)
- [generate parenthesis](https://leetcode.com/problems/generate-parentheses/description/)
- [car fleet](https://leetcode.com/problems/car-fleet/description/)
C++ questions :
- [c++ interview questions](https://kainjan1.wordpress.com/wp-content/uploads/2020/10/oop-mcq-question-bank.-1.pdf)
- [static keyword](https://github.com/NIXBLACK11/Cpp_basic/blob/main/Unit-01/counttimes.cpp)
- [friend function](https://github.com/NIXBLACK11/Cpp_basic/blob/main/Unit-01/val.cpp)
- [operator overloading](https://github.com/NIXBLACK11/Cpp_basic/blob/main/Unit-02/ff.cpp)

NOTE:
If *then address<and &to get address

so if object is passed as simple

so get it through 
```c++
	#include<iostream>
	using namespace std;

	class test{
	    private:
		int a;
		int b;
	    public:
		test(int a,int b)
		{
		    this->a=a;
		    this->b=b;
		}
		friend void display(test &);
	};
	void display(test &ptr)
	{
	    cout<<ptr.a;
	    cout<<ptr.b;
	}
	int main()
	{
	    test ptr(1,2);
	    display(ptr);
	}
```

if through new then

```c++
	#include<iostream>
	using namespace std;

	class test{
	    private:
		int a;
		int b;
	    public:
		test(int a,int b)
		{
		    this->a=a;
		    this->b=b;
		}
		friend void display(test *);
	};
	void display(test *ptr)
	{
	    cout<<ptr->a;
	    cout<<(*ptr).b;
	}
	int main()
	{
	    test *ptr = new test(1,2);
	    display(ptr);
	}
```
